#!/bin/bash -ex
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  # if $SOURCE was a relative symlink, we need to resolve it
  # relative to the path where the symlink file was located
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
export FARM_NG_ROOT=$( cd "$( dirname "${SOURCE}" )" >/dev/null 2>&1 && pwd )

# Realsense apt sources
if ! dpkg -s librealsense2-dev > /dev/null 2>&1; then
  apt-get update && sudo apt-get install -y software-properties-common apt-utils gnupg2
  apt-key adv --keyserver keys.gnupg.net --recv-key F6E65AC044F831AC80A06380C8B3A55A6F3EFCDE || apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-key
  add-apt-repository "deb http://realsense-hw-public.s3.amazonaws.com/Debian/apt-repo bionic main" -u
fi

# Yarn apt sources
if ! dpkg -s yarn > /dev/null 2>&1; then
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
fi

apt-get update --fix-missing
apt-get install -y --no-install-recommends \
	apt-transport-https \
	apt-utils \
	build-essential \
	ca-certificates \
	clang \
	curl \
	dirmngr \
	git \
	git-lfs \
	gnupg2 \
	gstreamer1.0-libav \
	gstreamer1.0-plugins-bad \
	gstreamer1.0-plugins-base \
	gstreamer1.0-plugins-good \
	gstreamer1.0-plugins-ugly \
	gstreamer1.0-tools \
	libatlas-base-dev \
	libavcodec-dev \
	libavformat-dev \
	libavresample-dev \
	libavutil-dev \
	libboost-filesystem-dev \
	libboost-regex-dev \
	libboost-system-dev \
	libdbus-glib-1-dev \
	libeigen3-dev \
	libgoogle-glog-dev \
	libgstreamer-plugins-base1.0-dev \
	libgstreamer1.0-dev \
	librealsense2-dev \
	librealsense2-utils \
	libsuitesparse-dev \
	libswscale-dev \
	libusb-1.0-0-dev \
	libv4l-dev \
	libx264-dev \
	libxvidcore-dev \
	lsb-release \
	network-manager \
	python3-dev \
	python3-pip \
	python3-venv \
	software-properties-common \
	yarn
apt-get clean

# Virtualenv
if ! pip3 show virtualenv > /dev/null 2>&1; then
  pip3 install virtualenv
fi

# Go
arch=`dpkg --print-architecture`
if ! /usr/local/go/bin/go version | grep 1.15.1; then
  wget https://golang.org/dl/go1.15.1.linux-${arch}.tar.gz -P /tmp/
  tar -C /usr/local -xzf /tmp/go1.15.1.linux-${arch}.tar.gz
  /usr/local/go/bin/go version
fi

# Node
if ! nodejs --version | grep 12.18.3; then
  curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
  sudo apt -y install nodejs
  nodejs --version
fi

# TS protobuf generator
npm install -g long ts-proto@^1.37.0
