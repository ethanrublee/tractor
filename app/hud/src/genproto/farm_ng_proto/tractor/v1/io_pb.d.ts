// package: farm_ng_proto.tractor.v1
// file: farm_ng_proto/tractor/v1/io.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Event extends jspb.Message {
  hasStamp(): boolean;
  clearStamp(): void;
  getStamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): void;

  hasRecvStamp(): boolean;
  clearRecvStamp(): void;
  getRecvStamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecvStamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    stamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    data?: google_protobuf_any_pb.Any.AsObject,
    recvStamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Announce extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getService(): string;
  setService(value: string): void;

  hasStamp(): boolean;
  clearStamp(): void;
  getStamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRecvStamp(): boolean;
  clearRecvStamp(): void;
  getRecvStamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecvStamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Announce.AsObject;
  static toObject(includeInstance: boolean, msg: Announce): Announce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Announce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Announce;
  static deserializeBinaryFromReader(message: Announce, reader: jspb.BinaryReader): Announce;
}

export namespace Announce {
  export type AsObject = {
    host: string,
    port: number,
    service: string,
    stamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    recvStamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}
