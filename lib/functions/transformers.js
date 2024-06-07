"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRGB = exports.size = exports.color = exports.shade = exports.normalizeMediaQueries = exports.deepMerge = exports.deepMap = exports.splitProps = void 0;
const react_native_1 = require("react-native");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
/**
 * Splits the input props object into separate props and style objects.
 * @param props - The input props object containing both regular props and style props.
 * @returns An object containing the separated props and style objects.
 */
const splitProps = (props) => {
    var _a, _b;
    if ((0, utils_1.isNullish)(props) || !(0, utils_1.isObject)(props) || Array.isArray(props)) {
        return {
            elementProps: {},
            styleProps: {},
        };
    }
    const _props = { ...props };
    const output = {
        props: {},
        style: {},
    };
    for (const key in _props) {
        if ((0, utils_1.isStyleProp)(key)) {
            output.style[key] = _props[key];
        }
        else {
            output.props[key] = _props[key];
        }
    }
    // Handle size, width, and height props
    if (_props.size || _props.width) {
        output.style["width"] = (_a = _props.size) !== null && _a !== void 0 ? _a : _props.width;
    }
    if (_props.size || _props.height) {
        output.style["height"] = (_b = _props.size) !== null && _b !== void 0 ? _b : _props.height;
    }
    return {
        elementProps: output.props,
        styleProps: output.style,
    };
};
exports.splitProps = splitProps;
/**
 * Recursively maps nested objects.
 * @param props - See DeepMapProps items.
 * @returns Transformed object.
 */
const deepMap = ({ values, match, map, skipKeys, onNesting, initialContext }) => {
    var _a;
    if ((0, utils_1.isObject)(values)) {
        let output = {};
        for (const key in values) {
            if (!skipKeys.includes(key)) {
                let ctx = { ...initialContext, deep: (_a = initialContext === null || initialContext === void 0 ? void 0 : initialContext.deep) !== null && _a !== void 0 ? _a : 0 };
                if ((0, utils_1.isObject)(values[key])) {
                    if (onNesting) {
                        ctx = onNesting({ values: values[key], key, ctx });
                    }
                    output[key] = (0, exports.deepMap)({ values: values[key], match, map, skipKeys, onNesting, initialContext: { ...ctx, deep: ctx.deep + 1 } });
                }
                else if (match(values[key])) {
                    output[key] = map({ key, value: values[key], ctx });
                }
                else {
                    output[key] = values[key];
                }
            }
        }
        return output;
    }
    return values;
};
exports.deepMap = deepMap;
/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @param {string[]} [skipKeys=[]] - The array of keys to skip during the merge.
 * @returns {object} The merged object.
 */
const deepMerge = (objects, skipKeys = []) => {
    return objects.reduce((output, value) => {
        if ((0, utils_1.isNullish)(output)) {
            output = {};
        }
        if (!(0, utils_1.isNullish)(value)) {
            Object.keys(value).forEach((key) => {
                if (skipKeys.includes(key)) {
                    return;
                }
                if ((0, utils_1.isObject)(value[key])) {
                    output[key] = (0, exports.deepMerge)([output[key], value[key]], skipKeys);
                }
                else if (!(0, utils_1.isNullish)(value[key])) {
                    output[key] = value[key];
                }
            });
        }
        return output;
    }, {});
};
exports.deepMerge = deepMerge;
/**
 * Function to consume media queries based on breakpoints and the device color scheme.
 * @param values - Media query values.
 * @param breakpoints - Breakpoint sizes.
 * @returns Generated style with media queries applied on.
 */
const normalizeMediaQueries = (values, breakpoints) => {
    var _a;
    if ((0, utils_1.isObject)(values) && Object.keys(values).length > 0) {
        const colorScheme = react_native_1.Appearance.getColorScheme();
        const width = react_native_1.Dimensions.get("window").width;
        const breakpointValues = breakpoints !== null && breakpoints !== void 0 ? breakpoints : constants_1.Breakpoints;
        const breakpointKeys = Object.keys(breakpointValues).sort((a, b) => breakpointValues[a] - breakpointValues[b]);
        let out = { ...values };
        if (values[`@${react_native_1.Platform.OS}`]) {
            out = (0, exports.deepMerge)([out, (0, exports.normalizeMediaQueries)(values[`@${react_native_1.Platform.OS}`])]);
        }
        for (const breakpointKey of breakpointKeys) {
            const breakpointStyle = values["@" + breakpointKey];
            if (breakpointStyle && width > breakpointValues[breakpointKey]) {
                out = (0, exports.deepMerge)([out, (0, exports.normalizeMediaQueries)(breakpointStyle)]);
            }
        }
        return (0, exports.deepMerge)([out, (0, exports.normalizeMediaQueries)((_a = values[`@${colorScheme}`]) !== null && _a !== void 0 ? _a : {})]);
    }
    return values;
};
exports.normalizeMediaQueries = normalizeMediaQueries;
/**
 * Function to generate shades of a color.
 * @param hex - Base color in hexadecimal format.
 * @param lumen - Luminosity value. 100|150|200|250|300|350|400|450|500|550|600|650|700|750|800|850|900
 * @returns Generated shaded color.
 */
const shade = (hex, lumen) => {
    const rgb = (0, exports.hexToRGB)(hex);
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
    const colorNames = Object.keys({ ...constants_1.ColorPallete, ...(0, exports.normalizeMediaQueries)(colorScheme, breakpoints) }).join("|");
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
 * @param theme - Theme schema.
 * @returns Resolved size value.
 */
const size = ({ key, value }, theme) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!(0, utils_1.isString)(value))
        return value;
    const match = constants_1.SizeRegex.exec(value);
    if (!match)
        return value;
    const multiplier = parseInt((_a = match[1]) !== null && _a !== void 0 ? _a : "1", 10);
    const sizeKey = (_b = match[2]) !== null && _b !== void 0 ? _b : "md";
    let resolvedSize;
    switch (key) {
        case "fontSize":
            resolvedSize = (_d = (_c = theme === null || theme === void 0 ? void 0 : theme.fontSizes) === null || _c === void 0 ? void 0 : _c[sizeKey]) !== null && _d !== void 0 ? _d : constants_1.FontSizes[sizeKey];
            break;
        case "fontWeight":
            resolvedSize = (_f = (_e = theme === null || theme === void 0 ? void 0 : theme.fontWeights) === null || _e === void 0 ? void 0 : _e[sizeKey]) !== null && _f !== void 0 ? _f : constants_1.FontWeights[sizeKey];
            break;
        default:
            resolvedSize = (_h = (_g = theme === null || theme === void 0 ? void 0 : theme.spacing) === null || _g === void 0 ? void 0 : _g[sizeKey]) !== null && _h !== void 0 ? _h : constants_1.Spacing[sizeKey];
    }
    return typeof resolvedSize === "number" ? multiplier * resolvedSize : value;
};
exports.size = size;
/**
 * Converts a hex color string to an RGB array.
 * @param {string} hex - The hex color string (e.g., "#FFFFFF" or "FFFFFF").
 * @returns {number[]} An array of three numbers representing the RGB values.
 * @throws {Error} If the hex string is not valid.
 */
const hexToRGB = (hex) => {
    if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
        throw new Error("Invalid hex color string");
    }
    return hex
        .replace(/^#/, "")
        .match(/\w\w/g)
        .map((hex) => parseInt(hex, 16));
};
exports.hexToRGB = hexToRGB;
//# sourceMappingURL=transformers.js.map