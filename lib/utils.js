"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullish = exports.isJSON = exports.isString = exports.isObject = exports.isFunction = exports.isStyleProp = exports.isEventProp = void 0;
const constants_1 = require("./constants");
/**
 * Checks if the given prop is a event prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's a event or false otherwise.
 */
const isEventProp = (key) => key.startsWith("on") && key.length > 2;
exports.isEventProp = isEventProp;
/**
 * Checks if the given prop is a style prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's a style or false otherwise.
 */
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
 * @param {any} value - The object to check.
 * @returns {boolean} True if the object is valid JSON, otherwise false.
 */
const isJSON = (value) => {
    try {
        JSON.parse(value);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isJSON = isJSON;
/**
 * Checks if the given value is nullish (undefined or null).
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is undefined or null, otherwise false.
 */
const isNullish = (value) => value === undefined || value === null;
exports.isNullish = isNullish;
//# sourceMappingURL=utils.js.map