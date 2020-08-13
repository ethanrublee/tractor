// package: farm_ng_proto.tractor.v1
// file: farm_ng_proto/tractor/v1/motor.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class MotorControllerState extends jspb.Message {
  hasRpm(): boolean;
  clearRpm(): void;
  getRpm(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setRpm(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrent(): boolean;
  clearCurrent(): void;
  getCurrent(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCurrent(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasDutyCycle(): boolean;
  clearDutyCycle(): void;
  getDutyCycle(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setDutyCycle(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAmpHours(): boolean;
  clearAmpHours(): void;
  getAmpHours(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAmpHours(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasAmpHoursCharged(): boolean;
  clearAmpHoursCharged(): void;
  getAmpHoursCharged(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setAmpHoursCharged(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasWattHours(): boolean;
  clearWattHours(): void;
  getWattHours(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setWattHours(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasWattHoursCharged(): boolean;
  clearWattHoursCharged(): void;
  getWattHoursCharged(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setWattHoursCharged(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTempFet(): boolean;
  clearTempFet(): void;
  getTempFet(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTempFet(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTempMotor(): boolean;
  clearTempMotor(): void;
  getTempMotor(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTempMotor(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCurrentIn(): boolean;
  clearCurrentIn(): void;
  getCurrentIn(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setCurrentIn(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasPidPos(): boolean;
  clearPidPos(): void;
  getPidPos(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setPidPos(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasTachometer(): boolean;
  clearTachometer(): void;
  getTachometer(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTachometer(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasInputVoltage(): boolean;
  clearInputVoltage(): void;
  getInputVoltage(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setInputVoltage(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MotorControllerState.AsObject;
  static toObject(includeInstance: boolean, msg: MotorControllerState): MotorControllerState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MotorControllerState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MotorControllerState;
  static deserializeBinaryFromReader(message: MotorControllerState, reader: jspb.BinaryReader): MotorControllerState;
}

export namespace MotorControllerState {
  export type AsObject = {
    rpm?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    current?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    dutyCycle?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    ampHours?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    ampHoursCharged?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    wattHours?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    wattHoursCharged?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    tempFet?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    tempMotor?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    currentIn?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    pidPos?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    tachometer?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    inputVoltage?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}
