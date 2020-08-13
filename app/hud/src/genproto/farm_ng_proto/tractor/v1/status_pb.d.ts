// package: farm_ng_proto.tractor.v1
// file: farm_ng_proto/tractor/v1/status.proto

import * as jspb from "google-protobuf";
import * as farm_ng_proto_tractor_v1_geometry_pb from "../../../farm_ng_proto/tractor/v1/geometry_pb";

export class StreamStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamStatusRequest): StreamStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamStatusRequest;
  static deserializeBinaryFromReader(message: StreamStatusRequest, reader: jspb.BinaryReader): StreamStatusRequest;
}

export namespace StreamStatusRequest {
  export type AsObject = {
  }
}

export class Status extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): farm_ng_proto_tractor_v1_geometry_pb.SE3Pose | undefined;
  setPose(value?: farm_ng_proto_tractor_v1_geometry_pb.SE3Pose): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    pose?: farm_ng_proto_tractor_v1_geometry_pb.SE3Pose.AsObject,
  }
}
