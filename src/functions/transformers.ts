import { ColorIntensity, ColorPallete, ColorRegex, DefaultSizes, SizeRegex } from "../constants";
import { ColorsSchema, SizesSchema } from "../types";
import { isStyle } from "../utils";

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
    } else if (typeof value === "object") {
      output[key] = resolveStyleProps(props, colorsSchema, sizeSchema);
    }
  }

  return output;
};

export const hexToRGB = (hex: string) => hex.match(/\w\w/g).map((hex: string) => parseInt(hex, 16));

export const reshade = (hex: string, lumen: number): string => {
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

export const color = (value: string, colors?: ColorsSchema, ignoreOwn = true): string => {
  if (ColorPallete[value]) {
    return ColorPallete[value];
  }

  if (colors[value]) {
    return colors[value];
  }

  if (ColorRegex.test(value)) {
    const [colorName, lumen] = value.split(".");
    const color = ColorPallete[colorName];
    if (color) {
      return reshade(color, parseInt(lumen));
    }
  } else if (colors && !ignoreOwn) {
    const themeColors = Object.keys(colors).join("|");
    const themeColorRegex = new RegExp(`\\b(?:${themeColors})\\.${ColorIntensity}\\b`);
    if (themeColorRegex.test(value)) {
      const [colorName, lumen] = value.split(".");
      const color = colors[colorName];
      if (color) {
        return reshade(color, parseInt(lumen));
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

/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @returns {object} The merged object.
 */
export const deepMerge = (objects: any[]): object => {
  if (!Array.isArray(objects)) {
    throw new TypeError("Expected an array of objects");
  }

  const isObject = (obj: any) => obj && typeof obj === "object" && !Array.isArray(obj);

  return objects.reduce((acc, obj) => {
    Object.keys(obj).forEach((key) => {
      if (isObject(obj[key])) {
        if (!acc[key]) {
          acc[key] = {};
        }
        acc[key] = deepMerge([acc[key], obj[key]]);
      } else {
        acc[key] = obj[key];
      }
    });
    return acc;
  }, {});
};
