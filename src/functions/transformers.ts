import { Appearance, Dimensions, Platform } from "react-native";
import { ColorIntensity, ColorPallete, DefaultBreakpoints, DefaultSizes, SizeRegex } from "../constants";
import { ColorsSchema, DeepMapProps, ResponsiveSchema, ThemeSchema, WithMediaQuery } from "../types";
import { hexToRGB, isNullish, isObject, isString, isStyleProp } from "../utils";

/**
 * Splits the input props object into separate props and style objects.
 *
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
 * Recursively transforms nested objects based on the provided match and localTransform functions.
 * @param props - See DeepMapProps items.
 * @returns Transformed object.
 */
export const deepMap = ({ input, context, match, map, skipKeys }: DeepMapProps) => {
  const shouldSkip = (key: string) => skipKeys.includes(key);

  if (match(input)) {
    return map({ value: input, context });
  } else if (isObject(input)) {
    let output = {};
    for (const key in input) {
      if(!shouldSkip(key)){
        const value = input[key];
        output[key] = value;
        if (match(value)) {
          output[key] = map({ value, context });
        } else if (isObject(value)) {
          output[key] = deepMap({ input: value, context, match, map, skipKeys });
        }
      }
    }
    return output;
  }

  return input;
};
/**
 * Utility function to recursively transform size strings within an object.
 * @param props - The input object containing size strings to be transformed.
 * @param sizeSchema - Optional schema for size transformation.
 * @returns Object with size strings transformed.
 */
export const deepSize = (props: object, sizeSchema?: ResponsiveSchema<number>) => {
  return deepMap({
    input: props,
    match: (value) => isString(value) && (value == "2k" || value == "4k" || SizeRegex.test(value)),
    map: ({ value }) => size(value, sizeSchema),
    skipKeys: ['children']
  });
};

/**
 * Utility function to recursively transform color strings within an object.
 * @param props - The input object containing color strings to be transformed.
 * @param colorsSchema - Optional schema for color transformation.
 * @returns Object with color strings transformed.
 */
export const deepColor = (props: object, colorsSchema?: ColorsSchema) => {
  const colorRegex = new RegExp(`\\b(?:${Object.keys({ ...ColorPallete, ...colorsSchema }).join("|")})\\.${ColorIntensity}\\b`);
  return deepMap({
    input: props,
    match: (value) => isString(value) && colorRegex.test(value),
    map: ({ value }) => color(value, colorsSchema),
    skipKeys: ['children']
  });
};

/**
 * Utility function to perform transformations given a theme schema on a object recursively.
 * @param props - The input object containing values to be transformed.
 * @param colorsSchema - Optional schema for transformation.
 * @returns Object with values transformed.
 */
export const deepTransform = (object, theme?: ThemeSchema) => {
  return deepSize(deepColor(object, theme?.colors), theme?.sizes);
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
export const media = <T = any>(values?: WithMediaQuery<T>, breakpoints?: ResponsiveSchema<number>) => {
  const colorScheme = Appearance.getColorScheme();
  const width = Dimensions.get("window").width;
  const breakpointsValues = breakpoints ?? DefaultBreakpoints;

  let output: any = values ?? {};

  if (values && Object.keys(values).length > 0) {
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
export const color = (value: string, colorScheme?: ColorsSchema, breakpoints?: ResponsiveSchema<number>): string => {
  if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl")) {
    return value;
  }

  if (ColorPallete[value]) {
    return ColorPallete[value];
  }

  if (colorScheme?.[value]) {
    return colorScheme[value];
  }

  const colorNames = Object.keys({ ...ColorPallete, ...media(colorScheme, breakpoints) }).join("|");
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

/**
 * Function to resolve size values.
 * @param value - Size value to resolve.
 * @param sizesSchema - Size schema.
 * @returns Resolved size value.
 */
export const size = (value: string | number, sizesSchema?: ResponsiveSchema<number>) => {
  if (typeof value == "string") {
    if (value != "2k" && value != "4k") {
      const match = SizeRegex.exec(value);
      if (match && match.length > 0) {
        const multiplier = typeof match[0] == "string" ? parseInt(match[0]) : 1;
        const breakpointSize = match[1] ?? "md";
        const sizes = { ...DefaultSizes, ...sizesSchema };
        const value = sizes[breakpointSize];
        return multiplier * value;
      }
    }

    return { ...DefaultSizes, ...sizesSchema }[value];
  }

  return value;
};
