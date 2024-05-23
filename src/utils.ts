import { StyleProps } from "./constants";

export const isEvent = (key: string) => key.startsWith("on") && key.length > 2;

export const isStyle = (key: string) => StyleProps.some((prop) => key.includes(prop));

export const isJSON = (obj: string) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

export const hexToRGB = (hex: string) => hex.match(/\w\w/g).map((hex: string) => parseInt(hex, 16));

/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @returns {object} The merged object.
 */
export const deepMerge = (objects: any[]): object => {
  if (!Array.isArray(objects)) {
    throw new TypeError("Expected an array of objects");
  }

  const isObject = (obj: any) => obj && typeof obj === "object" && !Array.isArray(obj);

  return objects.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      if (isObject(obj[key])) {
        if (!acc[key]) {
          acc[key] = {};
        }
        acc[key] = deepMerge([acc[key], obj[key]]);
      } else {
        acc[key] = obj[key];
      }
    });
    return acc;
  }, {});
};