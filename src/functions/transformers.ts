import { Appearance, Dimensions, Platform } from "react-native";
import { Breakpoints, ColorIntensity, ColorPallete, FontSizes, FontWeights, SizeRegex, Spacing } from "../constants";
import { ColorsSchema, DeepMapProps, ResponsiveSchema, ThemeSchema, TransformParams, TypedColor, WithMediaQuery } from "../types";
import { isNullish, isObject, isString, isStyleProp } from "../utils";

/**
 * Splits the input props object into separate props and style objects.
 * @param props - The input props object containing both regular props and style props.
 * @returns An object containing the separated props and style objects.
 */
export const splitProps = (
  props,
): {
  elementProps: { [key: string]: any };
  styleProps: { [key: string]: any };
} => {
  if (isNullish(props) || !isObject(props) || Array.isArray(props)) {
    return {
      elementProps: {},
      styleProps: {},
    };
  }

  const _props: any = { ...props };

  const output = {
    props: {},
    style: {},
  };

  for (const key in _props) {
    if (isStyleProp(key)) {
      output.style[key] = _props[key];
    } else {
      output.props[key] = _props[key];
    }
  }

  // Handle size, width, and height props
  if (_props.size || _props.width) {
    output.style["width"] = _props.size ?? _props.width;
  }
  if (_props.size || _props.height) {
    output.style["height"] = _props.size ?? _props.height;
  }

  return {
    elementProps: output.props,
    styleProps: output.style,
  };
};

/**
 * Recursively maps nested objects.
 * @param props - See DeepMapProps items.
 * @returns Transformed object.
 */
export const deepMap = ({ values, match, map, skipKeys, onNesting, initialContext }: DeepMapProps) => {
  if (isObject(values)) {
    let output = {};
    for (const key in values) {
      if (!skipKeys.includes(key)) {
        let ctx = { ...initialContext, deep: initialContext?.deep ?? 0 };
        if (isObject(values[key])) {
          if (onNesting) {
            ctx = onNesting({ values: values[key], key, ctx });
          }
          output[key] = deepMap({ values: values[key], match, map, skipKeys, onNesting, initialContext: { ...ctx, deep: ctx.deep + 1 } });
        } else if (match(values[key])) {
          output[key] = map({ key, value: values[key], ctx });
        } else {
          output[key] = values[key];
        }
      }
    }
    return output;
  }

  return values;
};

/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @param {string[]} [skipKeys=[]] - The array of keys to skip during the merge.
 * @returns {object} The merged object.
 */
export const deepMerge = (objects, skipKeys = []) => {
  return objects.reduce((output: any, value: any) => {
    if (isNullish(output)) {
      output = {};
    }
    if (!isNullish(value)) {
      Object.keys(value).forEach((key) => {
        if (skipKeys.includes(key)) {
          return;
        }
        if (isObject(value[key])) {
          output[key] = deepMerge([output[key], value[key]], skipKeys);
        } else if (!isNullish(value[key])) {
          output[key] = value[key];
        }
      });
    }
    return output;
  }, {});
};

/**
 * Function to consume media queries based on breakpoints and the device color scheme.
 * @param values - Media query values.
 * @param breakpoints - Breakpoint sizes.
 * @returns Generated style with media queries applied on.
 */
export const normalizeMediaQueries = <T = any>(values?: any, breakpoints?: ResponsiveSchema<number>) => {
  if (isObject(values) && Object.keys(values).length > 0) {
    const colorScheme = Appearance.getColorScheme();
    const width = Dimensions.get("window").width;
    const breakpointValues = breakpoints ?? Breakpoints;
    const breakpointKeys = Object.keys(breakpointValues).sort((a, b) => breakpointValues[a] - breakpointValues[b]);

    let out = { ...values };

    if (values[`@${Platform.OS}`]) {
      out = deepMerge([out, normalizeMediaQueries(values[`@${Platform.OS}`])]);
    }

    for (const breakpointKey of breakpointKeys) {
      const breakpointStyle = values["@" + breakpointKey];

      if (breakpointStyle && width > breakpointValues[breakpointKey]) {
        out = deepMerge([out, normalizeMediaQueries(breakpointStyle)]);
      }
    }

    return deepMerge([out, normalizeMediaQueries(values[`@${colorScheme}`] ?? {})]);
  }

  return values;
};

/**
 * Function to generate shades of a color.
 * @param hex - Base color in hexadecimal format.
 * @param lumen - Luminosity value. 100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900
 * @returns Generated shaded color.
 */
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

/**
 * Function to resolve color values.
 * @param value - Color value to resolve.
 * @param colorScheme - Color scheme.
 * @param breakpoints - Breakpoint sizes.
 * @returns Resolved color value.
 */
export const color = (value: string, colorScheme?: ColorsSchema, breakpoints?: ResponsiveSchema<number>): TypedColor => {
  if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl")) {
    return value as TypedColor;
  }

  if (ColorPallete[value]) {
    return ColorPallete[value];
  }

  if (colorScheme?.[value]) {
    return colorScheme[value];
  }

  const colorNames = Object.keys({ ...ColorPallete, ...normalizeMediaQueries(colorScheme, breakpoints) }).join("|");
  const colorRegex = new RegExp(`\\b(?:${colorNames})\\.${ColorIntensity}\\b`);

  if (colorRegex.test(value)) {
    const [colorName, lumen] = value.split(".");
    const baseColor = ColorPallete[colorName];
    if (baseColor) {
      return shade(baseColor, parseInt(lumen)) as TypedColor;
    }
  }

  return value as TypedColor;
};

/**
 * Function to resolve size values.
 * @param value - Size value to resolve.
 * @param theme - Theme schema.
 * @returns Resolved size value.
 */
export const size = ({ key, value }: TransformParams, theme?: ThemeSchema) => {
  if (!isString(value)) return value;

  const match = SizeRegex.exec(value);
  if (!match) return value;

  const multiplier = parseInt(match[1] ?? "1", 10);
  const sizeKey = match[2] ?? "md";

  let resolvedSize;
  switch (key) {
    case "fontSize":
      resolvedSize = theme?.fontSizes?.[sizeKey] ?? FontSizes[sizeKey];
      break;
    case "fontWeight":
      resolvedSize = theme?.fontWeights?.[sizeKey] ?? FontWeights[sizeKey];
      break;
    default:
      resolvedSize = theme?.spacing?.[sizeKey] ?? Spacing[sizeKey];
  }

  return typeof resolvedSize === "number" ? multiplier * resolvedSize : value;
};

/**
 * Converts a hex color string to an RGB array.
 * @param {string} hex - The hex color string (e.g., "#FFFFFF" or "FFFFFF").
 * @returns {number[]} An array of three numbers representing the RGB values.
 * @throws {Error} If the hex string is not valid.
 */
export const hexToRGB = (hex: string): number[] => {
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex color string");
  }
  return hex
    .replace(/^#/, "")
    .match(/\w\w/g)
    .map((hex: string) => parseInt(hex, 16));
};
