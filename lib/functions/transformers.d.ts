import { ColorsSchema, SizesSchema } from "../types";
export declare const splitProps: ({ props, parser }: {
    props: {
        [key: string]: any;
    };
    parser?: Function;
}) => {
    props: any;
    style: any;
};
export declare const resolveStyleProps: (props: any, colorsSchema?: ColorsSchema, sizeSchema?: SizesSchema<number>) => any;
export declare const hexToRGB: (hex: string) => number[];
export declare const reshade: (hex: string, lumen: number) => string;
export declare const color: (value: string, colors?: ColorsSchema, ignoreOwn?: boolean) => string;
export declare const size: (value: string, sizesSchema?: SizesSchema<number>) => number;
/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @returns {object} The merged object.
 */
export declare const deepMerge: (objects: any[]) => object;
