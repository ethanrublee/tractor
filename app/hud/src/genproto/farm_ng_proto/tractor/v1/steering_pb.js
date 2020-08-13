// source: farm_ng_proto/tractor/v1/steering.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.farm_ng_proto.tractor.v1.SteeringCommand', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.farm_ng_proto.tractor.v1.SteeringCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.farm_ng_proto.tractor.v1.SteeringCommand.displayName = 'proto.farm_ng_proto.tractor.v1.SteeringCommand';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.farm_ng_proto.tractor.v1.SteeringCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.farm_ng_proto.tractor.v1.SteeringCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    deadman: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    brake: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    velocity: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    angularVelocity: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.farm_ng_proto.tractor.v1.SteeringCommand}
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.farm_ng_proto.tractor.v1.SteeringCommand;
  return proto.farm_ng_proto.tractor.v1.SteeringCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.farm_ng_proto.tractor.v1.SteeringCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.farm_ng_proto.tractor.v1.SteeringCommand}
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDeadman(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBrake(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVelocity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAngularVelocity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.farm_ng_proto.tractor.v1.SteeringCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.farm_ng_proto.tractor.v1.SteeringCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeadman();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getBrake();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getVelocity();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getAngularVelocity();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double deadman = 1;
 * @return {number}
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.getDeadman = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.farm_ng_proto.tractor.v1.SteeringCommand} returns this
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.setDeadman = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double brake = 2;
 * @return {number}
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.getBrake = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.farm_ng_proto.tractor.v1.SteeringCommand} returns this
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.setBrake = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double velocity = 3;
 * @return {number}
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.getVelocity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.farm_ng_proto.tractor.v1.SteeringCommand} returns this
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.setVelocity = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double angular_velocity = 4;
 * @return {number}
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.getAngularVelocity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.farm_ng_proto.tractor.v1.SteeringCommand} returns this
 */
proto.farm_ng_proto.tractor.v1.SteeringCommand.prototype.setAngularVelocity = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


goog.object.extend(exports, proto.farm_ng_proto.tractor.v1);
