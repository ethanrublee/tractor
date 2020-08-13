// package: farm_ng_proto.tractor.v1
// file: farm_ng_proto/tractor/v1/tracking_camera.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as farm_ng_proto_tractor_v1_geometry_pb from "../../../farm_ng_proto/tractor/v1/geometry_pb";

export class TrackingCameraPoseFrame extends jspb.Message {
  getFrameNumber(): number;
  setFrameNumber(value: number): void;

  hasStampPose(): boolean;
  clearStampPose(): void;
  getStampPose(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampPose(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartPoseCurrent(): boolean;
  clearStartPoseCurrent(): void;
  getStartPoseCurrent(): farm_ng_proto_tractor_v1_geometry_pb.SE3Pose | undefined;
  setStartPoseCurrent(value?: farm_ng_proto_tractor_v1_geometry_pb.SE3Pose): void;

  hasVelocity(): boolean;
  clearVelocity(): void;
  getVelocity(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setVelocity(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  hasAcceleration(): boolean;
  clearAcceleration(): void;
  getAcceleration(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setAcceleration(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  hasAngularVelocity(): boolean;
  clearAngularVelocity(): void;
  getAngularVelocity(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setAngularVelocity(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  hasAngularAcceleration(): boolean;
  clearAngularAcceleration(): void;
  getAngularAcceleration(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setAngularAcceleration(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  getTrackerConfidence(): TrackingCameraPoseFrame.ConfidenceMap[keyof TrackingCameraPoseFrame.ConfidenceMap];
  setTrackerConfidence(value: TrackingCameraPoseFrame.ConfidenceMap[keyof TrackingCameraPoseFrame.ConfidenceMap]): void;

  getMapperConfidence(): TrackingCameraPoseFrame.ConfidenceMap[keyof TrackingCameraPoseFrame.ConfidenceMap];
  setMapperConfidence(value: TrackingCameraPoseFrame.ConfidenceMap[keyof TrackingCameraPoseFrame.ConfidenceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackingCameraPoseFrame.AsObject;
  static toObject(includeInstance: boolean, msg: TrackingCameraPoseFrame): TrackingCameraPoseFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackingCameraPoseFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackingCameraPoseFrame;
  static deserializeBinaryFromReader(message: TrackingCameraPoseFrame, reader: jspb.BinaryReader): TrackingCameraPoseFrame;
}

export namespace TrackingCameraPoseFrame {
  export type AsObject = {
    frameNumber: number,
    stampPose?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startPoseCurrent?: farm_ng_proto_tractor_v1_geometry_pb.SE3Pose.AsObject,
    velocity?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    acceleration?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    angularVelocity?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    angularAcceleration?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    trackerConfidence: TrackingCameraPoseFrame.ConfidenceMap[keyof TrackingCameraPoseFrame.ConfidenceMap],
    mapperConfidence: TrackingCameraPoseFrame.ConfidenceMap[keyof TrackingCameraPoseFrame.ConfidenceMap],
  }

  export interface ConfidenceMap {
    CONFIDENCE_UNSPECIFIED: 0;
    CONFIDENCE_FAILED: 1;
    CONFIDENCE_LOW: 2;
    CONFIDENCE_MEDIUM: 3;
    CONFIDENCE_HIGH: 4;
  }

  export const Confidence: ConfidenceMap;
}

export class TrackingCameraMotionFrame extends jspb.Message {
  getFrameNumber(): number;
  setFrameNumber(value: number): void;

  hasStampMotion(): boolean;
  clearStampMotion(): void;
  getStampMotion(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampMotion(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMotionType(): TrackingCameraMotionFrame.MotionTypeMap[keyof TrackingCameraMotionFrame.MotionTypeMap];
  setMotionType(value: TrackingCameraMotionFrame.MotionTypeMap[keyof TrackingCameraMotionFrame.MotionTypeMap]): void;

  hasMotionData(): boolean;
  clearMotionData(): void;
  getMotionData(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setMotionData(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrackingCameraMotionFrame.AsObject;
  static toObject(includeInstance: boolean, msg: TrackingCameraMotionFrame): TrackingCameraMotionFrame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrackingCameraMotionFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrackingCameraMotionFrame;
  static deserializeBinaryFromReader(message: TrackingCameraMotionFrame, reader: jspb.BinaryReader): TrackingCameraMotionFrame;
}

export namespace TrackingCameraMotionFrame {
  export type AsObject = {
    frameNumber: number,
    stampMotion?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    motionType: TrackingCameraMotionFrame.MotionTypeMap[keyof TrackingCameraMotionFrame.MotionTypeMap],
    motionData?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
  }

  export interface MotionTypeMap {
    MOTION_TYPE_UNSPECIFIED: 0;
    MOTION_TYPE_GYRO: 1;
    MOTION_TYPE_ACCEL: 2;
  }

  export const MotionType: MotionTypeMap;
}
