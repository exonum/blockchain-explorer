// source: exonum/proof/map_proof.proto
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

var exonum_crypto_types_pb = require('../../exonum/crypto/types_pb.js');
goog.object.extend(proto, exonum_crypto_types_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.exonum.proof.MapProof', null, global);
goog.exportSymbol('proto.exonum.proof.MapProofEntry', null, global);
goog.exportSymbol('proto.exonum.proof.OptionalEntry', null, global);
goog.exportSymbol('proto.exonum.proof.OptionalEntry.MaybeValueCase', null, global);
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
proto.exonum.proof.MapProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.exonum.proof.MapProof.repeatedFields_, null);
};
goog.inherits(proto.exonum.proof.MapProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.proof.MapProof.displayName = 'proto.exonum.proof.MapProof';
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
proto.exonum.proof.OptionalEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.exonum.proof.OptionalEntry.oneofGroups_);
};
goog.inherits(proto.exonum.proof.OptionalEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.proof.OptionalEntry.displayName = 'proto.exonum.proof.OptionalEntry';
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
proto.exonum.proof.MapProofEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.exonum.proof.MapProofEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.exonum.proof.MapProofEntry.displayName = 'proto.exonum.proof.MapProofEntry';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.exonum.proof.MapProof.repeatedFields_ = [1,2];



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
proto.exonum.proof.MapProof.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.proof.MapProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.proof.MapProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.proof.MapProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.exonum.proof.OptionalEntry.toObject, includeInstance),
    proofList: jspb.Message.toObjectList(msg.getProofList(),
    proto.exonum.proof.MapProofEntry.toObject, includeInstance)
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
 * @return {!proto.exonum.proof.MapProof}
 */
proto.exonum.proof.MapProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.proof.MapProof;
  return proto.exonum.proof.MapProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.proof.MapProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.proof.MapProof}
 */
proto.exonum.proof.MapProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.exonum.proof.OptionalEntry;
      reader.readMessage(value,proto.exonum.proof.OptionalEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    case 2:
      var value = new proto.exonum.proof.MapProofEntry;
      reader.readMessage(value,proto.exonum.proof.MapProofEntry.deserializeBinaryFromReader);
      msg.addProof(value);
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
proto.exonum.proof.MapProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.proof.MapProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.proof.MapProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.proof.MapProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.exonum.proof.OptionalEntry.serializeBinaryToWriter
    );
  }
  f = message.getProofList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.exonum.proof.MapProofEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OptionalEntry entries = 1;
 * @return {!Array<!proto.exonum.proof.OptionalEntry>}
 */
proto.exonum.proof.MapProof.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.exonum.proof.OptionalEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.exonum.proof.OptionalEntry, 1));
};


/**
 * @param {!Array<!proto.exonum.proof.OptionalEntry>} value
 * @return {!proto.exonum.proof.MapProof} returns this
*/
proto.exonum.proof.MapProof.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.exonum.proof.OptionalEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.exonum.proof.OptionalEntry}
 */
proto.exonum.proof.MapProof.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.exonum.proof.OptionalEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.exonum.proof.MapProof} returns this
 */
proto.exonum.proof.MapProof.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


/**
 * repeated MapProofEntry proof = 2;
 * @return {!Array<!proto.exonum.proof.MapProofEntry>}
 */
proto.exonum.proof.MapProof.prototype.getProofList = function() {
  return /** @type{!Array<!proto.exonum.proof.MapProofEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.exonum.proof.MapProofEntry, 2));
};


/**
 * @param {!Array<!proto.exonum.proof.MapProofEntry>} value
 * @return {!proto.exonum.proof.MapProof} returns this
*/
proto.exonum.proof.MapProof.prototype.setProofList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.exonum.proof.MapProofEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.exonum.proof.MapProofEntry}
 */
proto.exonum.proof.MapProof.prototype.addProof = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.exonum.proof.MapProofEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.exonum.proof.MapProof} returns this
 */
proto.exonum.proof.MapProof.prototype.clearProofList = function() {
  return this.setProofList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.exonum.proof.OptionalEntry.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.exonum.proof.OptionalEntry.MaybeValueCase = {
  MAYBE_VALUE_NOT_SET: 0,
  VALUE: 2,
  NO_VALUE: 3
};

/**
 * @return {proto.exonum.proof.OptionalEntry.MaybeValueCase}
 */
proto.exonum.proof.OptionalEntry.prototype.getMaybeValueCase = function() {
  return /** @type {proto.exonum.proof.OptionalEntry.MaybeValueCase} */(jspb.Message.computeOneofCase(this, proto.exonum.proof.OptionalEntry.oneofGroups_[0]));
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
proto.exonum.proof.OptionalEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.proof.OptionalEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.proof.OptionalEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.proof.OptionalEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64(),
    noValue: (f = msg.getNoValue()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
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
 * @return {!proto.exonum.proof.OptionalEntry}
 */
proto.exonum.proof.OptionalEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.proof.OptionalEntry;
  return proto.exonum.proof.OptionalEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.proof.OptionalEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.proof.OptionalEntry}
 */
proto.exonum.proof.OptionalEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 3:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setNoValue(value);
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
proto.exonum.proof.OptionalEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.proof.OptionalEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.proof.OptionalEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.proof.OptionalEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getNoValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.exonum.proof.OptionalEntry.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.exonum.proof.OptionalEntry.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.exonum.proof.OptionalEntry.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.exonum.proof.OptionalEntry} returns this
 */
proto.exonum.proof.OptionalEntry.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.exonum.proof.OptionalEntry.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.exonum.proof.OptionalEntry.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.exonum.proof.OptionalEntry.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.exonum.proof.OptionalEntry} returns this
 */
proto.exonum.proof.OptionalEntry.prototype.setValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.exonum.proof.OptionalEntry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.exonum.proof.OptionalEntry} returns this
 */
proto.exonum.proof.OptionalEntry.prototype.clearValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.exonum.proof.OptionalEntry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.proof.OptionalEntry.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Empty no_value = 3;
 * @return {?proto.google.protobuf.Empty}
 */
proto.exonum.proof.OptionalEntry.prototype.getNoValue = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 3));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.exonum.proof.OptionalEntry} returns this
*/
proto.exonum.proof.OptionalEntry.prototype.setNoValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.exonum.proof.OptionalEntry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.proof.OptionalEntry} returns this
 */
proto.exonum.proof.OptionalEntry.prototype.clearNoValue = function() {
  return this.setNoValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.proof.OptionalEntry.prototype.hasNoValue = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.exonum.proof.MapProofEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.exonum.proof.MapProofEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.exonum.proof.MapProofEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.proof.MapProofEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: msg.getPath_asB64(),
    hash: (f = msg.getHash()) && exonum_crypto_types_pb.Hash.toObject(includeInstance, f),
    pathPadding: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.exonum.proof.MapProofEntry}
 */
proto.exonum.proof.MapProofEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.exonum.proof.MapProofEntry;
  return proto.exonum.proof.MapProofEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.exonum.proof.MapProofEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.exonum.proof.MapProofEntry}
 */
proto.exonum.proof.MapProofEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPath(value);
      break;
    case 2:
      var value = new exonum_crypto_types_pb.Hash;
      reader.readMessage(value,exonum_crypto_types_pb.Hash.deserializeBinaryFromReader);
      msg.setHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPathPadding(value);
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
proto.exonum.proof.MapProofEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.exonum.proof.MapProofEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.exonum.proof.MapProofEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.exonum.proof.MapProofEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getHash();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      exonum_crypto_types_pb.Hash.serializeBinaryToWriter
    );
  }
  f = message.getPathPadding();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional bytes path = 1;
 * @return {!(string|Uint8Array)}
 */
proto.exonum.proof.MapProofEntry.prototype.getPath = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes path = 1;
 * This is a type-conversion wrapper around `getPath()`
 * @return {string}
 */
proto.exonum.proof.MapProofEntry.prototype.getPath_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPath()));
};


/**
 * optional bytes path = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPath()`
 * @return {!Uint8Array}
 */
proto.exonum.proof.MapProofEntry.prototype.getPath_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPath()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.exonum.proof.MapProofEntry} returns this
 */
proto.exonum.proof.MapProofEntry.prototype.setPath = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional exonum.crypto.Hash hash = 2;
 * @return {?proto.exonum.crypto.Hash}
 */
proto.exonum.proof.MapProofEntry.prototype.getHash = function() {
  return /** @type{?proto.exonum.crypto.Hash} */ (
    jspb.Message.getWrapperField(this, exonum_crypto_types_pb.Hash, 2));
};


/**
 * @param {?proto.exonum.crypto.Hash|undefined} value
 * @return {!proto.exonum.proof.MapProofEntry} returns this
*/
proto.exonum.proof.MapProofEntry.prototype.setHash = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.exonum.proof.MapProofEntry} returns this
 */
proto.exonum.proof.MapProofEntry.prototype.clearHash = function() {
  return this.setHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.exonum.proof.MapProofEntry.prototype.hasHash = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 path_padding = 3;
 * @return {number}
 */
proto.exonum.proof.MapProofEntry.prototype.getPathPadding = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.exonum.proof.MapProofEntry} returns this
 */
proto.exonum.proof.MapProofEntry.prototype.setPathPadding = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.exonum.proof);