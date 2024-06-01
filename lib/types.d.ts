/// <reference types="react" />
import { DimensionValue, FlatList, ImageStyle, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native";
import { KeysOfUnion } from "type-fest";
import { ColorPallete, DefaultSizes, ReducedRangeSizes } from "./constants";
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
type DeclarativeColor = `${string}.${ColorRange}` | `${ColorPalleteKeys}`;
/**
 * Union type representing various types of colors.
 */
type TypedColor = RGBColor | RGBAColor | HEXColor | HSLColor | HSLAColor | DeclarativeColor;
/**
 * Type defining all the optional media queries you can apply to a given component.
 */
export type WithMediaQuery<T = any> = T & {
  "@ios"?: T;
  "@android"?: T;
  "@windows"?: T;
  "@macos"?: T;
  "@web"?: T;
  "@light"?: T;
  "@dark"?: T;
} & {
  [key in `@${SizeNameKeys}`]?: T;
};
/**
 * Type representing styles with typed properties for common attributes.
 */
export type Style<TStyleProps = ViewStyle> = TStyleProps & OverrideTypedProps;
/**
 * Type representing a dimension.
 */
type TypedDimension =
  | DimensionValue
  | keyof ReducedRangeSizes
  | `${"2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"}${keyof ReducedRangeSizes}`
  | "2k"
  | "4k";
/**
 * Type representing override props for the base style type.
 */
type OverrideTypedProps = {
  flex?: number;
  color?: TypedColor;
  padding?: TypedDimension;
  margin?: TypedDimension;
  size?: TypedDimension;
  width?: TypedDimension;
  height?: TypedDimension;
} & {
  [key in `padding${string}`]?: TypedDimension;
} & {
  [key in `margin${string}`]?: TypedDimension;
} & {
  [key in `${string}Color`]?: TypedColor;
};
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
  [key in SizeNameKeys]: T;
};
/**
 * Schema combining color palettes, stylesheets, sizes, font sizes, and breakpoints to form a complete theme.
 */
export type ThemeSchema = {
  colors?: ColorsSchema;
  styles?: StylesheetSchema;
  sizes?: ResponsiveSchema<number>;
  fontSizes?: ResponsiveSchema<number>;
  breakpoints?: ResponsiveSchema<number>;
};
/**
 * Union type representing the keys of the color palette.
 */
export type ColorPalleteKeys = keyof typeof ColorPallete;
/**
 * Union type representing the keys of the default sizes.
 */
export type SizeNameKeys = KeysOfUnion<typeof DefaultSizes>;
/**
 * Type representing styled components with support for theming, parent styles, and variants.
 */
export type StyledSchema<TStyleProps = ViewStyle, TVariantNames extends string = never> = {
  theme?: ThemeSchema;
  parentStyles?: string[];
  variants?: Record<TVariantNames, Partial<WithMediaQuery<Style<TStyleProps>>>>;
} & WithMediaQuery<Style<TStyleProps>> &
  object;
/**
 * Type to remove keys from type definitions.
 */
export type OmitKeys<T, TOmit> = Omit<T, keyof TOmit>;
/**
 * Type representing props for styled components, including props for component-specific, style-specific, and variant-specific properties.
 */
export type StyledProps<TProps, TStyleProps, TVariants> = Omit<TProps & TStyleProps, keyof OverrideTypedProps> & {
  variant?: TVariants;
  children?: React.ReactNode;
  style?: TStyleProps & OverrideTypedProps;
} & Omit<TStyleProps, keyof OverrideTypedProps> &
  OverrideTypedProps;
/**
 * Type defining the properties required by the deepTransform function.
 */
export type DeepMapProps = {
  /** The input object to be transformed. */
  input: any;
  /** Optional context data for transformation. */
  context?: any;
  /** Function to transform individual values within the input object. */
  map: ({ value, key, context }: { value: any; key?: string; context?: any }) => any;
  /** Function to determine if a value should be transformed. */
  match: (value: any) => boolean;
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
}
  ? S
  : never;
/**
 * Maps a React component type to its corresponding style properties.
 */
export type ComponentStyleProps<T> = T extends typeof View
  ? ViewStyle
  : T extends typeof Pressable
    ? ViewStyle
    : T extends typeof Text
      ? TextStyle
      : T extends typeof Image
        ? ImageStyle
        : T extends typeof ScrollView
          ? ViewStyle
          : T extends typeof FlatList
            ? ViewStyle
            : T extends React.ComponentType<infer P>
              ? P extends {
                  style?: infer S;
                }
                ? S
                : {}
              : {};
export {};
