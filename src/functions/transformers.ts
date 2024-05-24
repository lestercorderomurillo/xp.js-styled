import { Appearance, Dimensions, Platform } from "react-native";
import { ColorIntensity, ColorPallete, DefaultBreakpoints, DefaultSizes, SizeRegex } from "../constants";
import { ColorsSchema, SizesSchema, WithMediaQuery } from "../types";
import { deepMerge, hexToRGB, isStyleProp } from "../utils";

/*
export const splitProps = ({ props, parser }: { props: { [key: string]: any }; parser?: Function }) => {
  let output = {
    props: {},
    style: {},
  };

  for (const prop in props) {
    if (isStyle(prop)) {
      output.style[prop] = props[prop];
    } else {
      output.props[prop] = props[prop];
    }
  }

  if (props.size || props.width) {
    output.style["width"] = props.size ?? props.width;
  }

  if (props.size || props.height) {
    output.style["height"] = props.size ?? props.height;
  }

  const parse = (values) => (parser ? parser(values) : values);

  return {
    props: parse(output.props),
    style: parse(output.style),
  };
};

export const resolveStyleProps = (props: any, colorsSchema?: ColorsSchema, sizeSchema?: SizesSchema<number>) => {
  let output = { ...props };
  for (const key in props) {
    const value = props[key];
    output[key] = value;

    if (typeof value === "string") {
      if (ColorRegex.test(value)) {
        output[key] = color(value, colorsSchema, false);
      } else if (SizeRegex.test(value)) {
        output[key] = size(value, sizeSchema);
      }
    } else if (typeof value === "object" && value !== null) {
      output[key] = resolveStyleProps(value, colorsSchema, sizeSchema);
    }
  }

  return output;
};

export const color = (value: string, colors?: ColorsSchema, ignoreOwn = true): string => {
  if (ColorPallete[value]) {
    return ColorPallete[value];
  }

  if (colors?.[value]) {
    return colors[value];
  }

  if (ColorRegex.test(value)) {
    const [colorName, lumen] = value.split(".");
    const baseColor = ColorPallete[colorName];
    if (baseColor) {
      return reshade(baseColor, parseInt(lumen));
    }
  } else if (colors && !ignoreOwn) {
    const themeColors = Object.keys(colors).join("|");
    const themeColorRegex = new RegExp(`\\b(?:${themeColors})\\.${ColorIntensity}\\b`);
    if (themeColorRegex.test(value)) {
      const [colorName, lumen] = value.split(".");
      const themeColor = colors[colorName];
      if (themeColor) {
        return reshade(themeColor, parseInt(lumen));
      }
    }
  }

  return value;
};

export const size = (value: string, sizesSchema?: SizesSchema<number>) => {
  const match = SizeRegex.exec(value);

  if (match && match.length > 1) {
    const multiplier = parseInt(match[1]);
    const baseSize = match[2];
    const baseValue = { ...DefaultSizes, ...sizesSchema }[baseSize] ?? 12;
    return multiplier * baseValue;
  } else {
    return { ...DefaultSizes, ...sizesSchema }[value] ?? 12;
  }
};
*/


export const media = <T = any>(values?: WithMediaQuery<T>, breakpoints?: SizesSchema<number>) => {
  
  const colorScheme = Appearance.getColorScheme();
  const width = Dimensions.get("window").width;
  const breakpointsValues = breakpoints ?? DefaultBreakpoints;

  let output: any = values ?? {};

  if(values){

    const platformSpecificValue = values[`@${Platform.OS}`];
    const breakpointKeys = Object.keys(breakpointsValues).sort((a, b) => breakpointsValues[a] - breakpointsValues[b]);

    if (platformSpecificValue) {
      output = deepMerge([output, platformSpecificValue]);
    }

    for (const breakpointKey of breakpointKeys) {
      const threshold = breakpointsValues[breakpointKey];
      const value = values["@" + breakpointKey];
  
      if (width > threshold && value) {
        output = deepMerge([output, value]);
      }
    }
  
    if (colorScheme == "dark" && values["@dark"]) {
      output = deepMerge([output, values["@dark"]]);
    } else if (colorScheme == "light" && values["@light"]) {
      output = deepMerge([output, values["@light"]]);
    }
  }
  

  return output;
};

export const shade = (hex: string, lumen: number): string => {
  const rgb = hexToRGB(hex);

  let factorValue = 0;
  if (lumen === 500) {
    factorValue = 0;
  } else if (lumen > 500) {
    factorValue = (lumen - 500) / 400;
  } else {
    factorValue = (500 - lumen) / 400;
  }

  factorValue *= 0.9;

  const newRgb = rgb.map((colorChannel) => {
    const newValue = colorChannel + factorValue * (lumen < 500 ? 255 - colorChannel : -colorChannel);
    return Math.min(255, Math.max(0, Math.round(newValue)));
  });

  const newHex = newRgb.map((value) => value.toString(16).padStart(2, "0")).join("");

  return `#${newHex}`;
};

export const color = (value: string, colorScheme?: ColorsSchema, breakpoints?: SizesSchema<number>): string => {

  if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl")){
      return value;
  }

  if (ColorPallete[value]) {
    return ColorPallete[value];
  }

  if (colorScheme?.[value]) {
    return colorScheme[value];
  }

  const colorNames = Object.keys({...ColorPallete, ...media(colorScheme, breakpoints)}).join("|")
  const colorRegex = new RegExp(`\\b(?:${colorNames})\\.${ColorIntensity}\\b`);

  if (colorRegex.test(value)) {
    const [colorName, lumen] = value.split(".");
    const baseColor = ColorPallete[colorName];
    if (baseColor) {
      return shade(baseColor, parseInt(lumen));
    }
  }

  return value;
};
