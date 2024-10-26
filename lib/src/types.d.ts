import { KeysOfUnion } from "type-fest";
import { DimensionValue, FlatList, ImageStyle, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native";
import { Breakpoints, ColorPallete, FontWeights } from "./constants";
/**
 * Type representing a color in RGB format.
 * Example: rgb(255, 255, 255)
 */
type RGBColor = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;
/**
 * Type representing a color in RGBA format.
 * Example: rgba(255, 255, 255, 0.5)
 */
type RGBAColor = `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number},${number},${number},${number})`;
/**
 * Type representing a color in HEX format.
 * Example: #FFFFFF
 */
type HEXColor = `#${string}`;
/**
 * Type representing a color in HSL format.
 * Example: hsl(0, 100%, 50%)
 */
type HSLColor = `hsl(${number}, ${number}, ${number})`;
/**
 * Type representing a color in HSLA format.
 * Example: hsla(0, 100%, 50%, 0.5)
 */
type HSLAColor = `hsla(${number}, ${number}, ${number}, ${number})`;
/**
 * Type representing a color range.
 */
type ColorRange = 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900;
/**
 * Type representing a declarative color.
 * Can be in RGB, RGBA, HEX, HSL, or HSLA format,
 * or reference a color from a predefined palette.
 */
type DeclarativeColor = `${string}.${ColorRange}` | `${ColorPalleteKey}`;
/**
 * Union type representing various types of colors.
 */
export type TypedColor = RGBColor | RGBAColor | HEXColor | HSLColor | HSLAColor | DeclarativeColor;
/**
 * Type defining all the optional media queries you can apply to a given component.
 */
export type WithMediaQuery<T = any> = T & {
    "@ios"?: T & WithMediaQuery<T>;
    "@android"?: T & WithMediaQuery<T>;
    "@windows"?: T & WithMediaQuery<T>;
    "@macos"?: T & WithMediaQuery<T>;
    "@web"?: T & WithMediaQuery<T>;
    "@light"?: T & WithMediaQuery<T>;
    "@dark"?: T & WithMediaQuery<T>;
} & {
    [key in `@${BreakpointsKey}`]?: T & WithMediaQuery<T>;
};
/**
 * Type representing styles with typed properties for common attributes.
 */
export type Style<TFields = ViewStyle> = PatchProps<TFields>;
/**
 * Typography properties type.
 */
export type TypographyProps = {
    fontSize?: TypedDimension;
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | FontWeightKey;
};
/**
 * Spacing properties type.
 */
export type SpacingProps = {
    padding?: TypedDimension;
    paddingVertical?: TypedDimension;
    paddingHorizontal?: TypedDimension;
    paddingTop?: TypedDimension;
    paddingBottom?: TypedDimension;
    paddingLeft?: TypedDimension;
    paddingRight?: TypedDimension;
    marginVertical?: TypedDimension;
    marginHorizontal?: TypedDimension;
    margin?: TypedDimension;
    marginTop?: TypedDimension;
    marginBottom?: TypedDimension;
    marginLeft?: TypedDimension;
    marginRight?: TypedDimension;
    gap?: TypedDimension;
    rowGap?: TypedDimension;
    columnGap?: TypedDimension;
};
/**
 * Layout properties type.
 */
export type LayoutProps = {
    flex?: number;
    size?: TypedDimension;
    width?: TypedDimension;
    height?: TypedDimension;
    minWidth?: TypedDimension;
    minHeight?: TypedDimension;
    maxWidth?: TypedDimension;
    maxHeight?: TypedDimension;
};
/**
 * Border properties type.
 */
export type BorderProps = {
    borderRadius?: TypedDimension;
    borderBottomLeftRadius?: TypedDimension;
    borderBottomRightRadius?: TypedDimension;
    borderBottomStartRadius?: TypedDimension;
    borderBottomEndRadius?: TypedDimension;
    borderTopLeftRadius?: TypedDimension;
    borderTopRightRadius?: TypedDimension;
    borderTopStartRadius?: TypedDimension;
    borderTopEndRadius?: TypedDimension;
};
/**
 * Color properties type.
 */
export type ColorProps = {
    color?: TypedColor;
    shadowColor?: TypedColor;
    backgroundColor?: TypedColor;
} & {
    [key in `${string}Color`]?: TypedColor;
};
/**
 * Patch a type prop if present.
 */
export type PatchType<TBase, TOverride> = {
    [K in keyof TBase]: K extends keyof TOverride ? TOverride[K] : TBase[K];
};
/**
 * All properties type.
 */
export type PatchProps<TProps = {}> = PatchType<TProps, TypographyProps & SpacingProps & ColorProps & BorderProps> & LayoutProps;
/**
 * Type representing a dimension.
 */
type TypedDimension = `${number}px` | DimensionValue | BreakpointsKey | `${"2xxl" | "3xxl" | "4xxl" | "5xxl" | "6xxl" | "7xxl" | "8xxl" | "9xxl"}`;
/**
 * Schema defining stylesheets with optional media queries.
 */
export type StylesheetSchema = Partial<{
    [key: string]: WithMediaQuery<Style>;
}>;
/**
 * Schema defining color palettes for light and dark modes, along with platform-specific colors.
 */
export type ColorsSchema = {
    "@light"?: {
        [key: string]: TypedColor;
    };
    "@dark"?: {
        [key: string]: TypedColor;
    };
} & {
    [key: string]: TypedColor;
};
/**
 * Responsive schema for defining layout at diferent breakpoints.
 */
export type ResponsiveSchema<T = any> = {
    [key in BreakpointsKey]: T;
};
/**
 * Schema combining color palettes, stylesheets, sizes, font sizes, and breakpoints to form a complete theme.
 */
export type ThemeSchema = {
    colors?: ColorsSchema;
    styles?: StylesheetSchema;
    spacing?: ResponsiveSchema<number>;
    fontWeights?: ResponsiveSchema<number>;
    fontSizes?: ResponsiveSchema<number>;
    breakpoints?: ResponsiveSchema<number>;
};
/**
 * Union type representing the keys of the font weight.
 */
export type FontWeightKey = keyof typeof FontWeights;
/**
 * Union type representing the keys of the color palette.
 */
export type ColorPalleteKey = keyof typeof ColorPallete;
/**
 * Union type representing the keys of the default sizes.
 */
export type BreakpointsKey = KeysOfUnion<typeof Breakpoints>;
/**
 * Type representing styled components with support for theming, parent styles, and variants.
 */
export type StyledSchema<TStyleProps = ViewStyle, TVariantNames extends string = never> = {
    theme?: ThemeSchema;
    parentStyles?: string[];
    variants?: Record<TVariantNames, Partial<WithMediaQuery<Style<TStyleProps>>>>;
} & WithMediaQuery<Style<TStyleProps>> & object;
/**
 * Type to remove keys from type definitions.
 */
export type OmitKeys<T, TOmit> = Omit<T, keyof TOmit>;
/**
 * Type representing props for styled components, combining component-specific, style-specific,
 * and variant-specific properties.
 *
 * @template TProps - Component-specific properties.
 * @template TStyleProps - Style-specific properties.
 * @template TVariants - Variant-specific properties.
 */
export type StyledProps<TProps, TStyleProps, TVariants> = {
    /** Optional variant property for component styling. */
    variant?: TVariants;
    /** Children nodes to be rendered within the component. */
    children?: React.ReactNode;
    /** Style properties including possible overrides. */
    style?: WithMediaQuery<PatchProps<TStyleProps>>;
} & WithMediaQuery<PatchProps<TProps & TStyleProps>>;
/**
 * Type representing parameters for a transformation function.
 *
 * @template TContext - Context type used during transformation.
 */
export type TransformParams<TContext = {}> = {
    /** The value to be transformed. */
    value: any;
    /** The key associated with the value. */
    key: string;
    /** Optional context data for transformation. */
    ctx?: TContext;
};
/**
 * Type defining the properties required by the deepTransform function.
 *
 * @template TCollection - The type of the input object to be transformed.
 * @template TContext - Context type used during transformation, which includes a readonly 'deep' property.
 */
export type DeepMapProps<TCollection extends object = {}, TContext extends object & {
    deep: Readonly<number>;
} = {
    deep: number;
}> = {
    /** The input object to be transformed. */
    values: TCollection;
    /** Function to determine if a value should be transformed. */
    match: (props: TransformParams<TContext>) => boolean;
    /** Function to transform individual values within the input object. */
    map: (props: TransformParams<TContext>) => any;
    /** Function to handle nested objects within the input object. */
    onNesting?: (props: Omit<TransformParams<TContext> & {
        values: TCollection;
    }, "value">) => TContext;
    /** Optional initial context data for transformation. */
    initialContext?: TContext;
    /** Optional keys to skip during transformation. */
    skipKeys?: string[];
};
/**
 * Extracts the properties of a React component type.
 * @template T - The React component type.
 * @typedef {T extends React.ComponentType<infer P> ? P : never} ExtractComponentProps
 */
export type ExtractComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;
/**
 * Extracts the style properties from an object with a style property.
 * @template T - The object type.
 * @typedef {T extends { style: infer S } ? S : never} ExtractStyleProps
 */
export type ExtractStyleProps<T> = T extends {
    style: infer S;
} ? S : never;
/**
 * Maps a React component type to its corresponding style properties.
 */
export type ComponentStyleProps<T> = T extends typeof View ? ViewStyle : T extends typeof Pressable ? ViewStyle : T extends typeof Text ? TextStyle : T extends typeof Image ? ImageStyle : T extends typeof ScrollView ? ViewStyle : T extends typeof FlatList ? ViewStyle : T extends React.ComponentType<infer P> ? P extends {
    style?: infer S;
} ? S : {} : {};
export {};
