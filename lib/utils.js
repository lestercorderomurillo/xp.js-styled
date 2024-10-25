"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullish = exports.isJSON = exports.isString = exports.isObject = exports.isFunction = exports.isStyleProp = exports.isTypographyProp = exports.isEventProp = void 0;
const constants_1 = require("./constants");
/**
 * Checks if the given prop is an event prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's an event prop, false otherwise.
 */
const isEventProp = (key) => {
    return key != null && key.startsWith("on") && key.length > 2;
};
exports.isEventProp = isEventProp;
/**
 * Checks if the given prop is a typography prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's a typography prop, false otherwise.
 */
const isTypographyProp = (key) => {
    return key != null && constants_1.TypographyProps.some((prop) => key.includes(prop));
};
exports.isTypographyProp = isTypographyProp;
/**
 * Checks if the given prop is a style prop.
 * @param {string} key The key to check.
 * @returns {boolean} True if it's a style prop, false otherwise.
 */
const isStyleProp = (key) => {
    return key != null && constants_1.StyleProps.some((prop) => key.includes(prop));
};
exports.isStyleProp = isStyleProp;
/**
 * Checks if the given value is a function.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
const isFunction = (value) => {
    return value != null && typeof value === "function";
};
exports.isFunction = isFunction;
/**
 * Checks if the given value is an object.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
const isObject = (value) => {
    return value != null && typeof value === "object" && !Array.isArray(value);
};
exports.isObject = isObject;
/**
 * Checks if the given value is a string.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
const isString = (value) => {
    return value != null && typeof value === "string";
};
exports.isString = isString;
/**
 * Checks if the given object is valid JSON.
 * @param {any} value - The object to check.
 * @returns {boolean} True if the object is valid JSON, otherwise false.
 */
const isJSON = (value) => {
    if (!(0, exports.isString)(value))
        return false;
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