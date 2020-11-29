#ifndef FARM_NG_CALIBRATION_CAMERA_MODEL_H_
#define FARM_NG_CALIBRATION_CAMERA_MODEL_H_

#include <numeric>

#include <glog/logging.h>
#include <Eigen/Dense>
#include <opencv2/core.hpp>

#include "farm_ng/perception/camera_model.pb.h"

namespace farm_ng {
namespace perception {

template <typename T>
class CameraModelJetMap {
 public:
  explicit CameraModelJetMap(const CameraModel& camera_model)
      : storage_({0.}),
        camera_model_(camera_model),
        raw_model_(storage_.data()) {
    storage_[0] = camera_model_.fx();
    storage_[1] = camera_model_.fy();
    storage_[2] = camera_model_.cx();
    storage_[3] = camera_model_.cy();
    CHECK_LE(camera_model_.distortion_coefficients_size(), 5);
    for (int i = 0; i < camera_model_.distortion_coefficients_size(); ++i) {
      storage_[4 + i] = camera_model_.distortion_coefficients(i);
    }
  }

  CameraModel GetCameraModel() const {
    CameraModel model;
    model.CopyFrom(camera_model_);
    model.set_fx(fx());
    model.set_fy(fy());
    model.set_cx(cx());
    model.set_cy(cy());
    for (int i = 0; i < camera_model_.distortion_coefficients_size(); ++i) {
      model.set_distortion_coefficients(i, distortion_coefficients(i));
    }
    return model;
  }

  explicit CameraModelJetMap(T* raw_model, const CameraModel& camera_model)
      : camera_model_(camera_model), raw_model_(raw_model) {}

  const T& fx() const { return raw_model_[0]; }
  const T& fy() const { return raw_model_[1]; }
  const T& cx() const { return raw_model_[2]; }
  const T& cy() const { return raw_model_[3]; }
  const T& distortion_coefficients(int idx) const {
    return raw_model_[4 + idx];
  }
  CameraModel::DistortionModel distortion_model() const {
    return camera_model_.distortion_model();
  }
  T* data() { return raw_model_; }
  size_t data_size() const { return storage_.size(); }

 private:
  std::array<T, 9> storage_;
  CameraModel camera_model_;

  T* raw_model_;  // fx, fy, cx, cy, d0, d1, d2,d3,d4
};

inline cv::Size GetCvSize(const CameraModel& model) {
  return cv::Size(model.image_width(), model.image_height());
}

// Given a point in 3D space, compute the corresponding pixel coordinates in
// an
//  image with no distortion or forward distortion coefficients produced by
//  the same camera
//
//  This is compatable with autodiff using ceres jet types, except that it
//  will not support solving for the camera model itself.
template <class T, class CameraModelT>
Eigen::Matrix<T, 2, 1> ProjectPointToPixel(
    const CameraModelT& camera, const Eigen::Matrix<T, 3, 1>& point) {
  using std::atan;
  using std::sqrt;
  const T eps(std::numeric_limits<float>::epsilon());
  T x = point.x() / point.z();

  T y = point.y() / point.z();

  if (camera.distortion_model() ==
      CameraModel::DISTORTION_MODEL_INVERSE_BROWN_CONRADY) {
    // Model copied from librealsense:
    // https://github.com/IntelRealSense/librealsense/blob/0adceb9dc6fce63c348346e1aef1b63c052a1db9/include/librealsense2/rsutil.h#L23
    T r2 = x * x + y * y;
    T f = T(1) + T(camera.distortion_coefficients(0)) * r2 +
          T(camera.distortion_coefficients(1)) * r2 * r2 +
          T(camera.distortion_coefficients(4)) * r2 * r2 * r2;
    x *= f;
    y *= f;
    T dx = x + T(2) * T(camera.distortion_coefficients(2)) * x * y +
           T(camera.distortion_coefficients(3)) * (r2 + T(2) * x * x);
    T dy = y + T(2) * T(camera.distortion_coefficients(3)) * x * y +
           T(camera.distortion_coefficients(2)) * (r2 + T(2) * y * y);
    x = dx;
    y = dy;
  } else if (camera.distortion_model() ==
             CameraModel::DISTORTION_MODEL_KANNALA_BRANDT4) {
    // Model copied from librealsense:
    // https://github.com/IntelRealSense/librealsense/blob/0adceb9dc6fce63c348346e1aef1b63c052a1db9/include/librealsense2/rsutil.h#L63
    T r = sqrt(x * x + y * y);
    if (r < eps) {
      r = eps;
    }
    T theta = atan(r);
    T theta2 = theta * theta;
    T series =
        T(1) +
        theta2 *
            (T(camera.distortion_coefficients(0)) +
             theta2 *
                 (T(camera.distortion_coefficients(1)) +
                  theta2 * (T(camera.distortion_coefficients(2)) +
                            theta2 * T(camera.distortion_coefficients(3)))));
    T rd = theta * series;
    x *= rd / r;
    y *= rd / r;
  } else {
    LOG(FATAL) << "Unsupported distortion model: " << camera.ShortDebugString();
  }

  return Eigen::Matrix<T, 2, 1>(x * T(camera.fx()) + T(camera.cx()),
                                y * T(camera.fy()) + T(camera.cy()));
}

// Given pixel coordinates in the distorted image, and a corresponding depth,
// reproject to a 3d point in the camera's reference frame.
//
//  This is compatable with autodiff using ceres jet types, except that it
//  will not support solving for the camera model itself.
template <typename T, typename CameraModelT>
Eigen::Matrix<T, 3, 1> ReprojectPixelToPoint(
    const CameraModelT& camera, const Eigen::Matrix<T, 2, 1>& pixel,
    const T& depth) {
  using std::abs;
  using std::sqrt;
  using std::tan;
  const T kEps(std::numeric_limits<float>::epsilon());
  T x = (pixel.x() - T(camera.cx())) / T(camera.fx());
  T y = (pixel.y() - T(camera.cy())) / T(camera.fy());
  if (camera.distortion_model() ==
      CameraModel::DISTORTION_MODEL_INVERSE_BROWN_CONRADY) {
    const T dist[5] = {T(camera.distortion_coefficients(0)),
                       T(camera.distortion_coefficients(1)),
                       T(camera.distortion_coefficients(2)),
                       T(camera.distortion_coefficients(3)),
                       T(camera.distortion_coefficients(4))};
    // https://github.com/IntelRealSense/librealsense/blob/0adceb9dc6fce63c348346e1aef1b63c052a1db9/include/librealsense2/rsutil.h#L90
    T r2 = x * x + y * y;
    T f = T(1) + dist[0] * r2 + dist[1] * r2 * r2 + dist[4] * r2 * r2 * r2;
    T ux = x * f + T(2) * dist[2] * x * y + dist[3] * (r2 + T(2) * x * x);
    T uy = y * f + T(2) * dist[3] * x * y + dist[2] * (r2 + T(2) * y * y);
    x = ux;
    y = uy;
  } else if (camera.distortion_model() ==
             CameraModel::DISTORTION_MODEL_KANNALA_BRANDT4) {
    // https://github.com/IntelRealSense/librealsense/blob/0adceb9dc6fce63c348346e1aef1b63c052a1db9/include/librealsense2/rsutil.h#L83

    T rd = sqrt(x * x + y * y);
    if (rd < kEps) {
      rd = kEps;
    }

    T theta = rd;
    T theta2 = rd * rd;

    const T dist[4] = {T(camera.distortion_coefficients(0)),
                       T(camera.distortion_coefficients(1)),
                       T(camera.distortion_coefficients(2)),
                       T(camera.distortion_coefficients(3))};

    for (int i = 0; i < 4; i++) {
      T f = theta *
                (T(1) +
                 theta2 * (dist[0] +
                           theta2 * (dist[1] +
                                     theta2 * (dist[2] + theta2 * dist[3])))) -
            rd;
      if (abs(f) < kEps) {
        break;
      }
      float df =
          T(1) +
          theta2 *
              (T(3) * dist[0] +
               theta2 * (T(5) * dist[1] +
                         theta2 * (T(7) * dist[2] + T(9) * theta2 * dist[3])));
      theta -= f / df;
      theta2 = theta * theta;
    }
    T r = tan(theta);
    x *= r / rd;
    y *= r / rd;
  } else {
    LOG(FATAL) << "Unsupported distortion model: " << camera.ShortDebugString();
  }
  return Eigen::Matrix<T, 3, 1>(depth * x, depth * y, depth);
}

CameraModel DefaultFishEyeT265CameraModel();
CameraModel Default1080HDCameraModel();
CameraModel DefaultCameraModel(const std::string& frame_name, int width,
                               int height);

}  // namespace perception
}  // namespace farm_ng

#endif  // FARM_NG_CALIBRATION_CAMERA_MODEL_H_
