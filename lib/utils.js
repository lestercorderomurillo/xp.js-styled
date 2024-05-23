"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMerge = exports.hexToRGB = exports.isJSON = exports.isStyle = exports.isEvent = void 0;
const constants_1 = require("./constants");
const isEvent = (key) => key.startsWith("on") && key.length > 2;
exports.isEvent = isEvent;
const isStyle = (key) => constants_1.StyleProps.some((prop) => key.includes(prop));
exports.isStyle = isStyle;
const isJSON = (obj) => {
    try {
        JSON.parse(obj);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isJSON = isJSON;
const hexToRGB = (hex) => hex.match(/\w\w/g).map((hex) => parseInt(hex, 16));
exports.hexToRGB = hexToRGB;
/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @returns {object} The merged object.
 */
const deepMerge = (objects) => {
    if (!Array.isArray(objects)) {
        throw new TypeError("Expected an array of objects");
    }
    const isObject = (obj) => obj && typeof obj === "object" && !Array.isArray(obj);
    return objects.reduce((acc, obj) => {
        Object.keys(obj).forEach((key) => {
            if (isObject(obj[key])) {
                if (!acc[key]) {
                    acc[key] = {};
                }
                acc[key] = (0, exports.deepMerge)([acc[key], obj[key]]);
            }
            else {
                acc[key] = obj[key];
            }
        });
        return acc;
    }, {});
};
exports.deepMerge = deepMerge;
//# sourceMappingURL=utils.js.map