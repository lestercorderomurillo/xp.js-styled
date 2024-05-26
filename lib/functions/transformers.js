"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.size =
  exports.color =
  exports.shade =
  exports.media =
  exports.deepTransform =
  exports.deepColor =
  exports.deepSize =
  exports.deepMap =
  exports.splitProps =
    void 0;
const react_native_1 = require("react-native");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
/**
 * Splits the input props object into separate props and style objects.
 *
 * @param props - The input props object containing both regular props and style props.
 * @param parser - An optional function to transform the resulting props and style objects.
 * @returns An object containing the separated props and style objects.
 */
const splitProps = ({ props, parser }) => {
  var _a, _b;
  // Initialize output objects
  const output = {
    props: { ...props }, // Create a shallow copy of props to avoid mutation
    style: {},
  };
  // Iterate over the props and separate style props
  for (const prop in output.props) {
    if ((0, utils_1.isStyleProp)(prop)) {
      output.style[prop] = output.props[prop];
      delete output.props[prop];
    }
  }
  // Handle size, width, and height props
  if (props.size || props.width) {
    output.style["width"] = (_a = props.size) !== null && _a !== void 0 ? _a : props.width;
  }
  if (props.size || props.height) {
    output.style["height"] = (_b = props.size) !== null && _b !== void 0 ? _b : props.height;
  }
  // Apply the parser function if provided
  const parse = (value) => (parser ? parser(value) : value);
  return {
    props: parse(output.props),
    style: parse(output.style),
  };
};
exports.splitProps = splitProps;
/**
 * Recursively transforms nested objects based on the provided match and localTransform functions.
 * @param input - The input object to be transformed.
 * @param context - Optional context data for transformation.
 * @param match - Function to determine if a value should be transformed.
 * @param map - Function to transform individual values within the input object.
 * @returns Transformed object.
 */
const deepMap = ({ input, context, match, map }) => {
  console.log(`Visiting input: ${JSON.stringify(input)}`);
  if (match(input)) {
    console.log(`Transforming input: ${JSON.stringify(input)}`);
    return map({ value: input, context });
  } else if ((0, utils_1.isObject)(input)) {
    console.log(`Processing object: ${JSON.stringify(input)}`);
    let output = {};
    for (const key in input) {
      const value = input[key];
      console.log(`Processing key: ${key}, value: ${JSON.stringify(value)}`);
      output[key] = value;
      if (match(value)) {
        console.log(`Transforming value for key ${key}: ${JSON.stringify(value)}`);
        output[key] = map({ value, context });
      } else if ((0, utils_1.isObject)(value)) {
        console.log(`Recursing into value for key ${key}: ${JSON.stringify(value)}`);
        output[key] = (0, exports.deepMap)({ input: value, context, match, map });
      }
    }
    console.log(`Returning transformed object: ${JSON.stringify(output)}`);
    return output;
  }
  console.log(`Returning input as is: ${JSON.stringify(input)}`);
  return input;
};
exports.deepMap = deepMap;
/**
 * Utility function to recursively transform size strings within an object.
 * @param props - The input object containing size strings to be transformed.
 * @param sizeSchema - Optional schema for size transformation.
 * @returns Object with size strings transformed.
 */
const deepSize = (props, sizeSchema) => {
  return (0, exports.deepMap)({
    input: props,
    match: (value) => (0, utils_1.isString)(value) && (value == "2k" || value == "4k" || constants_1.SizeRegex.test(value)),
    map: ({ value }) => (0, exports.size)(value, sizeSchema),
  });
};
exports.deepSize = deepSize;
/**
 * Utility function to recursively transform color strings within an object.
 * @param props - The input object containing color strings to be transformed.
 * @param colorsSchema - Optional schema for color transformation.
 * @returns Object with color strings transformed.
 */
const deepColor = (props, colorsSchema) => {
  const colorRegex = new RegExp(
    `\\b(?:${Object.keys({ ...constants_1.ColorPallete, ...colorsSchema }).join("|")})\\.${constants_1.ColorIntensity}\\b`,
  );
  return (0, exports.deepMap)({
    input: props,
    match: (value) => (0, utils_1.isString)(value) && colorRegex.test(value),
    map: ({ value }) => (0, exports.color)(value, colorsSchema),
  });
};
exports.deepColor = deepColor;
/**
 * Utility function to perform transformations given a theme schema on a object recursively.
 * @param props - The input object containing values to be transformed.
 * @param colorsSchema - Optional schema for transformation.
 * @returns Object with values transformed.
 */
const deepTransform = (object, theme) => {
  return (0, exports.deepSize)(
    (0, exports.deepColor)(object, theme === null || theme === void 0 ? void 0 : theme.colors),
    theme === null || theme === void 0 ? void 0 : theme.sizes,
  );
};
exports.deepTransform = deepTransform;
/**
 * Function to consume media queries based on breakpoints and the device color scheme.
 * @param values - Media query values.
 * @param breakpoints - Breakpoint sizes.
 * @returns Generated style with media queries applied on.
 */
const media = (values, breakpoints) => {
  const colorScheme = react_native_1.Appearance.getColorScheme();
  const width = react_native_1.Dimensions.get("window").width;
  const breakpointsValues = breakpoints !== null && breakpoints !== void 0 ? breakpoints : constants_1.DefaultBreakpoints;
  let output = values !== null && values !== void 0 ? values : {};
  if (values) {
    const platformSpecificValue = values[`@${react_native_1.Platform.OS}`];
    const breakpointKeys = Object.keys(breakpointsValues).sort((a, b) => breakpointsValues[a] - breakpointsValues[b]);
    if (platformSpecificValue) {
      output = (0, utils_1.deepMerge)([output, platformSpecificValue]);
    }
    for (const breakpointKey of breakpointKeys) {
      const threshold = breakpointsValues[breakpointKey];
      const value = values["@" + breakpointKey];
      if (width > threshold && value) {
        output = (0, utils_1.deepMerge)([output, value]);
      }
    }
    if (colorScheme == "dark" && values["@dark"]) {
      output = (0, utils_1.deepMerge)([output, values["@dark"]]);
    } else if (colorScheme == "light" && values["@light"]) {
      output = (0, utils_1.deepMerge)([output, values["@light"]]);
    }
  }
  return output;
};
exports.media = media;
/**
 * Function to generate shades of a color.
 * @param hex - Base color in hexadecimal format.
 * @param lumen - Luminosity value. 100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900
 * @returns Generated shaded color.
 */
const shade = (hex, lumen) => {
  const rgb = (0, utils_1.hexToRGB)(hex);
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
exports.shade = shade;
/**
 * Function to resolve color values.
 * @param value - Color value to resolve.
 * @param colorScheme - Color scheme.
 * @param breakpoints - Breakpoint sizes.
 * @returns Resolved color value.
 */
const color = (value, colorScheme, breakpoints) => {
  if (value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl")) {
    return value;
  }
  if (constants_1.ColorPallete[value]) {
    return constants_1.ColorPallete[value];
  }
  if (colorScheme === null || colorScheme === void 0 ? void 0 : colorScheme[value]) {
    return colorScheme[value];
  }
  const colorNames = Object.keys({ ...constants_1.ColorPallete, ...(0, exports.media)(colorScheme, breakpoints) }).join("|");
  const colorRegex = new RegExp(`\\b(?:${colorNames})\\.${constants_1.ColorIntensity}\\b`);
  if (colorRegex.test(value)) {
    const [colorName, lumen] = value.split(".");
    const baseColor = constants_1.ColorPallete[colorName];
    if (baseColor) {
      return (0, exports.shade)(baseColor, parseInt(lumen));
    }
  }
  return value;
};
exports.color = color;
/**
 * Function to resolve size values.
 * @param value - Size value to resolve.
 * @param sizesSchema - Size schema.
 * @returns Resolved size value.
 */
const size = (value, sizesSchema) => {
  var _a;
  if (typeof value == "string") {
    if (value != "2k" && value != "4k") {
      const match = constants_1.SizeRegex.exec(value);
      if (match && match.length > 0) {
        const multiplier = typeof match[0] == "string" ? parseInt(match[0]) : 1;
        const breakpointSize = (_a = match[1]) !== null && _a !== void 0 ? _a : "md";
        const sizes = { ...constants_1.DefaultSizes, ...sizesSchema };
        const value = sizes[breakpointSize];
        return multiplier * value;
      }
    }
    return { ...constants_1.DefaultSizes, ...sizesSchema }[value];
  }
  return value;
};
exports.size = size;
//# sourceMappingURL=transformers.js.map
