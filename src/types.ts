import { DimensionValue, StyleProp, ViewStyle } from "react-native";
import { KeysOfUnion } from "type-fest";
import { ColorPallete, DefaultSizes } from "./constants";

type RGBColor = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;
type RGBAColor = `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number},${number},${number},${number})`;
type HEXColor = `#${string}`;
type HSLColor = `hsl(${number}, ${number}, ${number})`;
type HSLAColor = `hsla(${number}, ${number}, ${number}, ${number})`;
type ColorRange = 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900;
type DeclarativeColor = `${string}.${ColorRange}` | `${ColorPalleteKeys}`;
type TypedColor = RGBColor | RGBAColor | HEXColor | HSLColor | HSLAColor | DeclarativeColor;

export type WithMediaQuery<T = any> = T & {
  "@ios"?: T;
  "@android"?: T;
  "@windows"?: T;
  "@macos"?: T;
  "@web"?: T;
  "@light"?: T;
  "@dark"?: T;
} & { [key in `@${SizeNameKeys}`]?: T };

export type Style<TProps = ViewStyle> = StyleProp<TProps> & TypedProps;

type TypedProps = {
  flex?: number;
  color?: TypedColor;
  padding?: DimensionValue;
  margin?: DimensionValue;
  size?: DimensionValue;
  width?: DimensionValue;
  height?: DimensionValue;
} & {
  [key in `padding${string}`]?: DimensionValue;
} & {
  [key in `margin${string}`]?: DimensionValue;
} & {
  [key in `${string}Color`]?: TypedColor;
};

export type StylesheetSchema  = Partial<{
  [key: string]: WithMediaQuery<Style>;
}>;

export type ColorsSchema = {
  "@light"?: { [key: string]: TypedColor };
  "@dark"?: { [key: string]: TypedColor };
} & { [key: string]: TypedColor };

export type SizesSchema<T = any> = { [key in SizeNameKeys]: T };

export type ThemeSchema = {
  colors?: ColorsSchema;
  styles?: StylesheetSchema ;
  sizes?: SizesSchema<number>;
  fontSizes?: SizesSchema<number>;
  breakpoints?: SizesSchema<number>;
};

export type ColorPalleteKeys = keyof typeof ColorPallete;

export type SizeNameKeys = KeysOfUnion<typeof DefaultSizes>;

export type StyledSchema = {
  theme?: ThemeSchema;
  parentStyles?: string[];
  variants?: { [x: string]: WithMediaQuery<Style> };
} & WithMediaQuery<Style>;

export type StyledProps<TProps, TStyleProps, TVariants> = TProps &
  TStyleProps & {
    variant?: TVariants;
    children?: React.ReactNode;
    style?: StyleProp<TStyleProps> & TypedProps;
  } & TypedProps;

  
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
};