// source: exonum/crypto/types.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.exonum.crypto.Hash', null, global);
goog.exportSymbol('proto.exonum.crypto.PublicKey', null, global);
goog.exportSymbol('proto.exonum.crypto.Signature', null, global);
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
proto.exonum.crypto.Hash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exonum.crypto.Hash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.crypto.Hash.displayName = 'proto.exonum.crypto.Hash';
}
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
proto.exonum.crypto.PublicKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exonum.crypto.PublicKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.crypto.PublicKey.displayName = 'proto.exonum.crypto.PublicKey';
}
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
proto.exonum.crypto.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exonum.crypto.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.crypto.Signature.displayName = 'proto.exonum.crypto.Signature';
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
proto.exonum.crypto.Hash.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.crypto.Hash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.crypto.Hash} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.crypto.Hash.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
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
 * @return {!proto.exonum.crypto.Hash}
 */
proto.exonum.crypto.Hash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.crypto.Hash;
  return proto.exonum.crypto.Hash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.crypto.Hash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.crypto.Hash}
 */
proto.exonum.crypto.Hash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.exonum.crypto.Hash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.crypto.Hash.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.crypto.Hash} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.crypto.Hash.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.exonum.crypto.Hash.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.exonum.crypto.Hash.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.exonum.crypto.Hash.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.exonum.crypto.Hash} returns this
 */
proto.exonum.crypto.Hash.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





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
proto.exonum.crypto.PublicKey.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.crypto.PublicKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.crypto.PublicKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.crypto.PublicKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
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
 * @return {!proto.exonum.crypto.PublicKey}
 */
proto.exonum.crypto.PublicKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.crypto.PublicKey;
  return proto.exonum.crypto.PublicKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.crypto.PublicKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.crypto.PublicKey}
 */
proto.exonum.crypto.PublicKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.exonum.crypto.PublicKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.crypto.PublicKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.crypto.PublicKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.crypto.PublicKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.exonum.crypto.PublicKey.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.exonum.crypto.PublicKey.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.exonum.crypto.PublicKey.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.exonum.crypto.PublicKey} returns this
 */
proto.exonum.crypto.PublicKey.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





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
proto.exonum.crypto.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.crypto.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.crypto.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.crypto.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
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
 * @return {!proto.exonum.crypto.Signature}
 */
proto.exonum.crypto.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.crypto.Signature;
  return proto.exonum.crypto.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.crypto.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.crypto.Signature}
 */
proto.exonum.crypto.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.exonum.crypto.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.crypto.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.crypto.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.crypto.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.exonum.crypto.Signature.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.exonum.crypto.Signature.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.exonum.crypto.Signature.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.exonum.crypto.Signature} returns this
 */
proto.exonum.crypto.Signature.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


goog.object.extend(exports, proto.exonum.crypto);