// package: farm_ng_proto.tractor.v1
// file: farm_ng_proto/tractor/v1/playback_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListLogsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogsRequest): ListLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogsRequest;
  static deserializeBinaryFromReader(message: ListLogsRequest, reader: jspb.BinaryReader): ListLogsRequest;
}

export namespace ListLogsRequest {
  export type AsObject = {
  }
}

export class ListLogsResponse extends jspb.Message {
  clearLogPathsList(): void;
  getLogPathsList(): Array<string>;
  setLogPathsList(value: Array<string>): void;
  addLogPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLogsResponse): ListLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLogsResponse;
  static deserializeBinaryFromReader(message: ListLogsResponse, reader: jspb.BinaryReader): ListLogsResponse;
}

export namespace ListLogsResponse {
  export type AsObject = {
    logPathsList: Array<string>,
  }
}

export class OpenLogRequest extends jspb.Message {
  getLogPath(): string;
  setLogPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenLogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenLogRequest): OpenLogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenLogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenLogRequest;
  static deserializeBinaryFromReader(message: OpenLogRequest, reader: jspb.BinaryReader): OpenLogRequest;
}

export namespace OpenLogRequest {
  export type AsObject = {
    logPath: string,
  }
}

export class OpenLogResponse extends jspb.Message {
  getNEvents(): number;
  setNEvents(value: number): void;

  hasStampBegin(): boolean;
  clearStampBegin(): void;
  getStampBegin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampBegin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStampEnd(): boolean;
  clearStampEnd(): void;
  getStampEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStampEnd(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenLogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenLogResponse): OpenLogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenLogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenLogResponse;
  static deserializeBinaryFromReader(message: OpenLogResponse, reader: jspb.BinaryReader): OpenLogResponse;
}

export namespace OpenLogResponse {
  export type AsObject = {
    nEvents: number,
    stampBegin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stampEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PlayRequest extends jspb.Message {
  getStartEvent(): number;
  setStartEvent(value: number): void;

  getNEvents(): number;
  setNEvents(value: number): void;

  getPlaybackRate(): PlayRequest.RateMap[keyof PlayRequest.RateMap];
  setPlaybackRate(value: PlayRequest.RateMap[keyof PlayRequest.RateMap]): void;

  getLoop(): boolean;
  setLoop(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayRequest): PlayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayRequest;
  static deserializeBinaryFromReader(message: PlayRequest, reader: jspb.BinaryReader): PlayRequest;
}

export namespace PlayRequest {
  export type AsObject = {
    startEvent: number,
    nEvents: number,
    playbackRate: PlayRequest.RateMap[keyof PlayRequest.RateMap],
    loop: boolean,
  }

  export interface RateMap {
    RATE_UNSPECIFIED: 0;
    RATE_ASAP: 1;
    RATE_REALTIME: 2;
  }

  export const Rate: RateMap;
}

export class PlayResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayResponse): PlayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayResponse;
  static deserializeBinaryFromReader(message: PlayResponse, reader: jspb.BinaryReader): PlayResponse;
}

export namespace PlayResponse {
  export type AsObject = {
  }
}

export class StopRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopRequest): StopRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopRequest;
  static deserializeBinaryFromReader(message: StopRequest, reader: jspb.BinaryReader): StopRequest;
}

export namespace StopRequest {
  export type AsObject = {
  }
}

export class StopResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopResponse): StopResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopResponse;
  static deserializeBinaryFromReader(message: StopResponse, reader: jspb.BinaryReader): StopResponse;
}

export namespace StopResponse {
  export type AsObject = {
  }
}
