// package: farm_ng_proto.tractor.v1
// file: farm_ng_proto/tractor/v1/geometry.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Vec2 extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vec2.AsObject;
  static toObject(includeInstance: boolean, msg: Vec2): Vec2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vec2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vec2;
  static deserializeBinaryFromReader(message: Vec2, reader: jspb.BinaryReader): Vec2;
}

export namespace Vec2 {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class PartialVec2 extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setX(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasY(): boolean;
  clearY(): void;
  getY(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setY(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialVec2.AsObject;
  static toObject(includeInstance: boolean, msg: PartialVec2): PartialVec2.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartialVec2, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialVec2;
  static deserializeBinaryFromReader(message: PartialVec2, reader: jspb.BinaryReader): PartialVec2;
}

export namespace PartialVec2 {
  export type AsObject = {
    x?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    y?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

export class Vec3 extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vec3.AsObject;
  static toObject(includeInstance: boolean, msg: Vec3): Vec3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vec3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vec3;
  static deserializeBinaryFromReader(message: Vec3, reader: jspb.BinaryReader): Vec3;
}

export namespace Vec3 {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class PartialVec3 extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setX(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasY(): boolean;
  clearY(): void;
  getY(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setY(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasZ(): boolean;
  clearZ(): void;
  getZ(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setZ(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialVec3.AsObject;
  static toObject(includeInstance: boolean, msg: PartialVec3): PartialVec3.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartialVec3, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialVec3;
  static deserializeBinaryFromReader(message: PartialVec3, reader: jspb.BinaryReader): PartialVec3;
}

export namespace PartialVec3 {
  export type AsObject = {
    x?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    y?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    z?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

export class Quaternion extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getW(): number;
  setW(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quaternion.AsObject;
  static toObject(includeInstance: boolean, msg: Quaternion): Quaternion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quaternion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quaternion;
  static deserializeBinaryFromReader(message: Quaternion, reader: jspb.BinaryReader): Quaternion;
}

export namespace Quaternion {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    w: number,
  }
}

export class SE3Pose extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Vec3 | undefined;
  setPosition(value?: Vec3): void;

  hasRotation(): boolean;
  clearRotation(): void;
  getRotation(): Quaternion | undefined;
  setRotation(value?: Quaternion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SE3Pose.AsObject;
  static toObject(includeInstance: boolean, msg: SE3Pose): SE3Pose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SE3Pose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SE3Pose;
  static deserializeBinaryFromReader(message: SE3Pose, reader: jspb.BinaryReader): SE3Pose;
}

export namespace SE3Pose {
  export type AsObject = {
    position?: Vec3.AsObject,
    rotation?: Quaternion.AsObject,
  }
}
