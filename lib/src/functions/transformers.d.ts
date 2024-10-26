import { ColorsSchema, DeepMapProps, ResponsiveSchema, ThemeSchema, TransformParams, TypedColor } from "../types";
/**
 * Splits the input props object into separate props and style objects.
 * @param props - The input props object containing both regular props and style props.
 * @returns An object containing the separated props and style objects.
 */
export declare const splitProps: (props: any) => {
    elementProps: {
        [key: string]: any;
    };
    styleProps: {
        [key: string]: any;
    };
};
/**
 * Recursively maps nested objects, omitting specified keys.
 * @param props - Deep map configuration properties.
 * @param props.values - The object to transform.
 * @param props.match - Function to determine if a value should be transformed.
 * @param props.map - Function to transform matching values.
 * @param props.skipKeys - Array of keys to omit from the output.
 * @param props.onNesting - Optional callback for nested objects.
 * @param props.initialContext - Initial context object.
 * @returns Transformed object with skipped keys removed.
 */
export declare const deepMap: ({ values, match, map, skipKeys, onNesting, initialContext }: DeepMapProps) => {};
/**
 * Merges an array of objects deeply, with support for arrays and objects.
 * Arrays are concatenated, objects are merged recursively.
 *
 * @param {(object|array)[]} objects - The array of objects or arrays to merge.
 * @param {string[]} [skipKeys=[]] - The array of keys to skip during the merge.
 * @returns {object|array} The merged result.
 */
export declare const deepMerge: (objects: any, skipKeys?: any[]) => any;
/**
 * Function to consume media queries based on breakpoints and the device color scheme.
 * @param values - Media query values.
 * @param breakpoints - Breakpoint sizes.
 * @returns Generated style with media queries applied on.
 */
export declare const normalizeMediaQueries: <T = any>(values?: any, breakpoints?: ResponsiveSchema<number>) => any;
/**
 * Function to generate shades of a color.
 * @param hex - Base color in hexadecimal format.
 * @param lumen - Luminosity value. 100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900
 * @returns Generated shaded color.
 */
export declare const shade: (hex: string, lumen: number) => string;
/**
 * Function to resolve color values.
 * @param value - Color value to resolve.
 * @param colorScheme - Color scheme.
 * @param breakpoints - Breakpoint sizes.
 * @returns Resolved color value.
 */
export declare const color: (value: string, colorScheme?: ColorsSchema, breakpoints?: ResponsiveSchema<number>) => TypedColor;
/**
 * Function to resolve size values.
 * @param value - Size value to resolve.
 * @param theme - Theme schema.
 * @returns Resolved size value.
 */
export declare const size: ({ key, value }: TransformParams, theme?: ThemeSchema) => any;
/**
 * Converts a hex color string to an RGB array.
 * @param {string} hex - The hex color string (e.g., "#FFFFFF" or "FFFFFF").
 * @returns {number[]} An array of three numbers representing the RGB values.
 * @throws {Error} If the hex string is not valid.
 */
export declare const hexToRGB: (hex: string) => number[];
