import { StyleProps } from "./constants";

export const isEventProp = (key: string) => key.startsWith("on") && key.length > 2;

export const isStyleProp = (key: string) => StyleProps.some((prop) => key.includes(prop));

/**
 * Checks if the given value is a function.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
export const isFunction = (value: any): value is Function => typeof value === "function";

/**
 * Checks if the given value is an object.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
export const isObject = (value: any): value is object => typeof value === "object";

/**
 * Checks if the given value is a string.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
export const isString = (value: any): value is string => typeof value === "string";

/**
 * Checks if the given object is valid JSON.
 * @param {any} value The object to check.
 * @returns {boolean} True if the object is valid JSON, otherwise false.
 */
export const isJSON = (value: any): boolean => {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
};

export const isNullish = (value: any) => value === undefined || value === null;

export const hexToRGB = (hex: string) => hex.match(/\w\w/g).map((hex: string) => parseInt(hex, 16));

/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @returns {object} The merged object.
 */
export const deepMerge = (objects: any[]): object => {
  return objects.reduce((output, value) => {
    if (isNullish(output)) {
      output = {};
    }
    if (!isNullish(value)) {
      Object.keys(value).forEach((key) => {
        if (isObject(value[key])) {
          output[key] = deepMerge([output[key], value[key]]);
        } else if (!isNullish(value[key])) {
          output[key] = value[key];
        }
      });
    }
    return output;
  }, {});
};