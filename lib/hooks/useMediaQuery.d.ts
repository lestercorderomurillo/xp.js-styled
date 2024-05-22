import { SizesSchema, WithMediaQuery } from "../types";
export declare const useMediaQuery: (breakpoints?: SizesSchema<number>) => {
    resolveMediaQuery: <T = any>(values: WithMediaQuery<T>) => any;
};
