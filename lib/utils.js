"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMerge =
  exports.hexToRGB =
  exports.isNullish =
  exports.isJSON =
  exports.isString =
  exports.isObject =
  exports.isFunction =
  exports.isStyleProp =
  exports.isEventProp =
    void 0;
const constants_1 = require("./constants");
const isEventProp = (key) => key.startsWith("on") && key.length > 2;
exports.isEventProp = isEventProp;
const isStyleProp = (key) => constants_1.StyleProps.some((prop) => key.includes(prop));
exports.isStyleProp = isStyleProp;
/**
 * Checks if the given value is a function.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
const isFunction = (value) => typeof value === "function";
exports.isFunction = isFunction;
/**
 * Checks if the given value is an object.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
const isObject = (value) => typeof value === "object";
exports.isObject = isObject;
/**
 * Checks if the given value is a string.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
const isString = (value) => typeof value === "string";
exports.isString = isString;
/**
 * Checks if the given object is valid JSON.
 * @param {any} value The object to check.
 * @returns {boolean} True if the object is valid JSON, otherwise false.
 */
const isJSON = (value) => {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
};
exports.isJSON = isJSON;
const isNullish = (value) => value === undefined || value === null;
exports.isNullish = isNullish;
const hexToRGB = (hex) => hex.match(/\w\w/g).map((hex) => parseInt(hex, 16));
exports.hexToRGB = hexToRGB;
/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @returns {object} The merged object.
 */
const deepMerge = (objects) => {
  return objects.reduce((output, value) => {
    if ((0, exports.isNullish)(output)) {
      output = {};
    }
    if (!(0, exports.isNullish)(value)) {
      Object.keys(value).forEach((key) => {
        if ((0, exports.isObject)(value[key])) {
          output[key] = (0, exports.deepMerge)([output[key], value[key]]);
        } else if (!(0, exports.isNullish)(value[key])) {
          output[key] = value[key];
        }
      });
    }
    return output;
  }, {});
};
exports.deepMerge = deepMerge;
//# sourceMappingURL=utils.js.map
