// source: enums.proto
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

goog.exportSymbol('proto.votings_service.InvalidReason', null, global);
goog.exportSymbol('proto.votings_service.VotingState', null, global);
/**
 * @enum {number}
 */
proto.votings_service.VotingState = {
  REGISTRATION: 0,
  INPROCESS: 1,
  STOPPED: 2,
  FINISHED: 3
};

/**
 * @enum {number}
 */
proto.votings_service.InvalidReason = {
  WRONGDISTRICT: 0,
  DECRYPTIONERROR: 1
};

goog.object.extend(exports, proto.votings_service);
