"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = exports.shade = exports.media = void 0;
const react_native_1 = require("react-native");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
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
        }
        else if (colorScheme == "light" && values["@light"]) {
            output = (0, utils_1.deepMerge)([output, values["@light"]]);
        }
    }
    return output;
};
exports.media = media;
const shade = (hex, lumen) => {
    const rgb = (0, utils_1.hexToRGB)(hex);
    let factorValue = 0;
    if (lumen === 500) {
        factorValue = 0;
    }
    else if (lumen > 500) {
        factorValue = (lumen - 500) / 400;
    }
    else {
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
//# sourceMappingURL=transformers.js.map