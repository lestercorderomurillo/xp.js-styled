import { Appearance, Dimensions, Platform } from "react-native";
import { Breakpoints, ColorIntensity, ColorPallete, FontSizes, FontWeights, ShortcutStyleProps, Spacing } from "../constants";
import { Colors, DeepMapProps, Responsive, Theme, TransformParams, TypedColor } from "../types";
import { isNullish, isObject, isStyleProp } from "../utils";

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
    if(key in ShortcutStyleProps){
      output.style[ShortcutStyleProps[key]] = _props[key];
    }else if (isStyleProp(key)) {
      output.style[key] = _props[key];
    } else if (key != "style") {
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
    styleProps: { ...props["style"], ...output.style },
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
export const deepMap = ({ values, match, map, skipKeys = [], onNesting, initialContext }: DeepMapProps) => {
  if (isObject(values)) {
    let output = {};
    for (const key in values) {
      if (skipKeys.includes(key)) {
        // Skip this key entirely - don't add it to output
        continue;
      }

      let ctx = { ...initialContext, deep: initialContext?.deep ?? 0 };

      if (isObject(values[key])) {
        if (onNesting) {
          ctx = onNesting({ values: values[key], key, ctx });
        }
        output[key] = deepMap({
          values: values[key],
          match,
          map,
          skipKeys,
          onNesting,
          initialContext: { ...ctx, deep: ctx.deep + 1 },
        });
      } else if (match(values[key])) {
        output[key] = map({ key, value: values[key], ctx });
      } else {
        output[key] = values[key];
      }
    }
    return output;
  }

  return values;
};

/**
 * Merges an array of objects deeply, with support for arrays and objects.
 * Arrays are concatenated, objects are merged recursively.
 *
 * @param {(object|array)[]} objects - The array of objects or arrays to merge.
 * @param {string[]} [skipKeys=[]] - The array of keys to skip during the merge.
 * @returns {object|array} The merged result.
 */
export const deepMerge = (objects, skipKeys = []) => {
  return objects.reduce((output: any, value: any) => {
    if (isNullish(output)) {
      output = Array.isArray(value) ? [] : {};
    }

    if (isNullish(value)) return output;

    if (Array.isArray(value)) {
      return Array.isArray(output) ? [...output, ...value] : value;
    }

    if (Array.isArray(output)) {
      return value;
    }

    Object.keys(value).forEach((key) => {
      if (skipKeys.includes(key)) {
        return;
      }

      const currentValue = value[key];
      const existingValue = output[key];

      if (Array.isArray(currentValue) || Array.isArray(existingValue)) {
        output[key] = deepMerge([existingValue, currentValue], skipKeys);
      } else if (isObject(currentValue)) {
        output[key] = deepMerge([existingValue, currentValue], skipKeys);
      } else if (!isNullish(currentValue)) {
        output[key] = currentValue;
      }
    });

    return output;
  }, undefined);
};

/**
 * Function to consume media queries based on breakpoints and the device color scheme.
 * @param values - Media query values.
 * @param breakpoints - Breakpoint sizes.
 * @returns Generated style with media queries applied on.
 */
export const normalizeMediaQueries = <T = any>(values?: any, breakpoints?: Responsive<number>) => {
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

    out = deepMerge([out, normalizeMediaQueries(values[`@${colorScheme}`] ?? {})]);

    for (const key in out) {
      if (key.startsWith("@")) {
        delete out[key];
      }
    }

    return out;
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
export const color = (value: string, colorScheme?: Colors, breakpoints?: Responsive<number>): TypedColor | string => {
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
export const size = ({ key, value }: TransformParams, theme?: Theme) => {
  // Return numeric value directly
  if (typeof value === "number") {
    return value;
  }

  // Handle pixel values (e.g., "16px")
  if (typeof value === "string" && value.match(/^(\d+)px$/)) {
    const pixelValue = parseInt(value, 10);
    return !isNaN(pixelValue) ? pixelValue : value;
  }

  // Handle font weight resolution if the key is "fontWeight"
  if (typeof value === "string" && key === "fontWeight") {
    const weightValue = theme?.fontWeights?.[value] ?? FontWeights[value as keyof typeof FontWeights];
    return weightValue !== undefined ? weightValue : value;
  }

  // Handle font size resolution if the key is "fontSize"
  if (typeof value === "string" && key === "fontSize") {
    const match = value.match(/\b(?:([2-9])xxl|xxs|xs|sm|md|lg|xl|xxl)\b/i);
    if (match) {
      const [fullMatch, multiplierStr] = match;
      const sizeKey = multiplierStr ? "xxl" : fullMatch.toLowerCase();
      const multiplier = multiplierStr ? parseInt(multiplierStr) : 1;

      const fontSize = theme?.fontSizes?.[sizeKey] ?? FontSizes[sizeKey as keyof typeof FontSizes];
      return fontSize !== undefined ? fontSize * multiplier : value;
    }
    return value;
  }

  // Handle spacing resolution as default if size key is valid
  if (typeof value === "string") {
    const match = value.match(/\b(?:([2-9])xxl|xxs|xs|sm|md|lg|xl|xxl)\b/i);
    if (match) {
      const [fullMatch, multiplierStr] = match;
      const sizeKey = multiplierStr ? "xxl" : fullMatch.toLowerCase();
      const multiplier = multiplierStr ? parseInt(multiplierStr) : 1;

      const spacing = theme?.spacing?.[sizeKey] ?? Spacing[sizeKey as keyof typeof Spacing];
      return spacing !== undefined ? spacing * multiplier : value;
    }
    return value;
  }

  // Return original value if no match was found
  return value;
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
