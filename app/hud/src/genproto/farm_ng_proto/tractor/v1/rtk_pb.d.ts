// package: farm_ng_proto.tractor.v1
// file: farm_ng_proto/tractor/v1/rtk.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as farm_ng_proto_tractor_v1_geometry_pb from "../../../farm_ng_proto/tractor/v1/geometry_pb";

export class RtkSolution extends jspb.Message {
  hasStampGps(): boolean;
  clearStampGps(): void;
  getStampGps(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampGps(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnuBaselineM(): boolean;
  clearEnuBaselineM(): void;
  getEnuBaselineM(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setEnuBaselineM(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  getStatus(): RtkSolution.StatusMap[keyof RtkSolution.StatusMap];
  setStatus(value: RtkSolution.StatusMap[keyof RtkSolution.StatusMap]): void;

  getNSatelites(): number;
  setNSatelites(value: number): void;

  hasStdEnu(): boolean;
  clearStdEnu(): void;
  getStdEnu(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setStdEnu(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  hasStdEnNuUe(): boolean;
  clearStdEnNuUe(): void;
  getStdEnNuUe(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setStdEnNuUe(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  getAge(): number;
  setAge(value: number): void;

  getArRatio(): number;
  setArRatio(value: number): void;

  hasVelocityEnuMs(): boolean;
  clearVelocityEnuMs(): void;
  getVelocityEnuMs(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setVelocityEnuMs(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  hasStdVelocityEnu(): boolean;
  clearStdVelocityEnu(): void;
  getStdVelocityEnu(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setStdVelocityEnu(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  hasStdVelocityEnNuUe(): boolean;
  clearStdVelocityEnNuUe(): void;
  getStdVelocityEnNuUe(): farm_ng_proto_tractor_v1_geometry_pb.Vec3 | undefined;
  setStdVelocityEnNuUe(value?: farm_ng_proto_tractor_v1_geometry_pb.Vec3): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RtkSolution.AsObject;
  static toObject(includeInstance: boolean, msg: RtkSolution): RtkSolution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RtkSolution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RtkSolution;
  static deserializeBinaryFromReader(message: RtkSolution, reader: jspb.BinaryReader): RtkSolution;
}

export namespace RtkSolution {
  export type AsObject = {
    stampGps?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    enuBaselineM?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    status: RtkSolution.StatusMap[keyof RtkSolution.StatusMap],
    nSatelites: number,
    stdEnu?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    stdEnNuUe?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    age: number,
    arRatio: number,
    velocityEnuMs?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    stdVelocityEnu?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
    stdVelocityEnNuUe?: farm_ng_proto_tractor_v1_geometry_pb.Vec3.AsObject,
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    STATUS_FIX: 1;
    STATUS_FLOAT: 2;
    STATUS_SBAS: 3;
    STATUS_DGPS: 4;
    STATUS_SINGLE: 5;
    STATUS_PPP: 6;
  }

  export const Status: StatusMap;
}

export class RtkServiceStatus extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RtkServiceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RtkServiceStatus): RtkServiceStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RtkServiceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RtkServiceStatus;
  static deserializeBinaryFromReader(message: RtkServiceStatus, reader: jspb.BinaryReader): RtkServiceStatus;
}

export namespace RtkServiceStatus {
  export type AsObject = {
    message: string,
  }
}
