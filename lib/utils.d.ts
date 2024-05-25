export declare const isEventProp: (key: string) => boolean;
export declare const isStyleProp: (key: string) => boolean;
/**
 * Checks if the given value is a function.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a function, otherwise false.
 */
export declare const isFunction: (value: any) => value is Function;
/**
 * Checks if the given value is an object.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is an object, otherwise false.
 */
export declare const isObject: (value: any) => value is object;
/**
 * Checks if the given value is a string.
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a string, otherwise false.
 */
export declare const isString: (value: any) => value is string;
/**
 * Checks if the given object is valid JSON.
 * @param {any} value The object to check.
 * @returns {boolean} True if the object is valid JSON, otherwise false.
 */
export declare const isJSON: (value: any) => boolean;
export declare const isNullish: (value: any) => boolean;
export declare const hexToRGB: (hex: string) => number[];
/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @returns {object} The merged object.
 */
export declare const deepMerge: (objects: any[]) => object;
