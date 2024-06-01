import { ColorsSchema, DeepMapProps, ResponsiveSchema, ThemeSchema, WithMediaQuery } from "../types";
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
 * Recursively maps nested objects.
 * @param props - See DeepMapProps items.
 * @returns Transformed object.
 */
export declare const deepMap: ({ values, match, map, skipKeys, onNesting, initialContext }: DeepMapProps) => {};
/**
 * Utility function to recursively transform size strings within an object.
 * @param props - The input object containing size strings to be transformed.
 * @param sizeSchema - Optional schema for size transformation.
 * @returns Object with size strings transformed.
 */
export declare const deepSize: (props: object, sizeSchema?: ResponsiveSchema<number>) => {};
/**
 * Utility function to recursively transform color strings within an object.
 * @param props - The input object containing color strings to be transformed.
 * @param colorsSchema - Optional schema for color transformation.
 * @returns Object with color strings transformed.
 */
export declare const deepColor: (props: object, colorsSchema?: ColorsSchema) => {};
/**
 * Utility function to perform transformations given a theme schema on a object recursively.
 * @returns Object with values transformed.
 */
export declare const deepStyling: (object: any, theme?: ThemeSchema) => {};
/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @param {string[]} [skipKeys=[]] - The array of keys to skip during the merge.
 * @returns {object} The merged object.
 */
export declare const deepMerge: (objects: any, skipKeys?: any[]) => any;
/**
 * Function to consume media queries based on breakpoints and the device color scheme.
 * @param values - Media query values.
 * @param breakpoints - Breakpoint sizes.
 * @returns Generated style with media queries applied on.
 */
export declare const normalizeMediaQueries: <T = any>(values?: WithMediaQuery<T>, breakpoints?: ResponsiveSchema<number>) => any;
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
export declare const color: (value: string, colorScheme?: ColorsSchema, breakpoints?: ResponsiveSchema<number>) => string;
/**
 * Function to resolve size values.
 * @param value - Size value to resolve.
 * @param sizesSchema - Size schema.
 * @returns Resolved size value.
 */
export declare const size: (value: string | number, sizesSchema?: ResponsiveSchema<number>) => number;
/**
 * Converts a hex color string to an RGB array.
 * @param {string} hex - The hex color string (e.g., "#FFFFFF" or "FFFFFF").
 * @returns {number[]} An array of three numbers representing the RGB values.
 * @throws {Error} If the hex string is not valid.
 */
export declare const hexToRGB: (hex: string) => number[];
