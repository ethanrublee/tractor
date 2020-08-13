// package: farm_ng_proto.tractor.v1
// file: farm_ng_proto/tractor/v1/steering.proto

import * as jspb from "google-protobuf";

export class SteeringCommand extends jspb.Message {
  getDeadman(): number;
  setDeadman(value: number): void;

  getBrake(): number;
  setBrake(value: number): void;

  getVelocity(): number;
  setVelocity(value: number): void;

  getAngularVelocity(): number;
  setAngularVelocity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SteeringCommand.AsObject;
  static toObject(includeInstance: boolean, msg: SteeringCommand): SteeringCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SteeringCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SteeringCommand;
  static deserializeBinaryFromReader(message: SteeringCommand, reader: jspb.BinaryReader): SteeringCommand;
}

export namespace SteeringCommand {
  export type AsObject = {
    deadman: number,
    brake: number,
    velocity: number,
    angularVelocity: number,
  }
}
