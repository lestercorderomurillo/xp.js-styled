"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMerge = exports.size = exports.color = exports.reshade = exports.hexToRGB = exports.resolveStyleProps = exports.splitProps = void 0;
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const splitProps = ({ props, parser }) => {
    var _a, _b;
    let output = {
        props: {},
        style: {},
    };
    for (const prop in props) {
        if ((0, utils_1.isStyle)(prop)) {
            output.style[prop] = props[prop];
        }
        else {
            output.props[prop] = props[prop];
        }
    }
    if (props.size || props.width) {
        output.style["width"] = (_a = props.size) !== null && _a !== void 0 ? _a : props.width;
    }
    if (props.size || props.height) {
        output.style["height"] = (_b = props.size) !== null && _b !== void 0 ? _b : props.height;
    }
    const parse = (values) => (parser ? parser(values) : values);
    return {
        props: parse(output.props),
        style: parse(output.style),
    };
};
exports.splitProps = splitProps;
const resolveStyleProps = (props, colorsSchema, sizeSchema) => {
    const output = {};
    const seenObjects = new WeakSet();
    const recursiveResolve = (input) => {
        if (typeof input !== 'object' || input === null || seenObjects.has(input)) {
            return input;
        }
        seenObjects.add(input);
        const result = Array.isArray(input) ? [] : {};
        for (const key in input) {
            const value = input[key];
            if (typeof value === "string") {
                if (constants_1.ColorRegex.test(value)) {
                    result[key] = (0, exports.color)(value, colorsSchema, false);
                }
                else if (constants_1.SizeRegex.test(value)) {
                    result[key] = (0, exports.size)(value, sizeSchema);
                }
                else {
                    result[key] = value;
                }
            }
            else if (typeof value === "object" && value !== null) {
                result[key] = recursiveResolve(value);
            }
            else {
                result[key] = value;
            }
        }
        return result;
    };
    return recursiveResolve(props);
};
exports.resolveStyleProps = resolveStyleProps;
const hexToRGB = (hex) => hex.match(/\w\w/g).map((hex) => parseInt(hex, 16));
exports.hexToRGB = hexToRGB;
const reshade = (hex, lumen) => {
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
exports.reshade = reshade;
const color = (value, colors, ignoreOwn = true) => {
    if (constants_1.ColorPallete[value]) {
        return constants_1.ColorPallete[value];
    }
    if (colors === null || colors === void 0 ? void 0 : colors[value]) {
        return colors[value];
    }
    if (constants_1.ColorRegex.test(value)) {
        const [colorName, lumen] = value.split(".");
        const baseColor = constants_1.ColorPallete[colorName];
        if (baseColor) {
            return (0, exports.reshade)(baseColor, parseInt(lumen));
        }
    }
    else if (colors && !ignoreOwn) {
        const themeColors = Object.keys(colors).join("|");
        const themeColorRegex = new RegExp(`\\b(?:${themeColors})\\.${constants_1.ColorIntensity}\\b`);
        if (themeColorRegex.test(value)) {
            const [colorName, lumen] = value.split(".");
            const themeColor = colors[colorName];
            if (themeColor) {
                return (0, exports.reshade)(themeColor, parseInt(lumen));
            }
        }
    }
    return value;
};
exports.color = color;
const size = (value, sizesSchema) => {
    var _a, _b;
    const match = constants_1.SizeRegex.exec(value);
    if (match && match.length > 1) {
        const multiplier = parseInt(match[1]);
        const baseSize = match[2];
        const baseValue = (_a = { ...constants_1.DefaultSizes, ...sizesSchema }[baseSize]) !== null && _a !== void 0 ? _a : 12;
        return multiplier * baseValue;
    }
    else {
        return (_b = { ...constants_1.DefaultSizes, ...sizesSchema }[value]) !== null && _b !== void 0 ? _b : 12;
    }
};
exports.size = size;
/**
 * Merges an array of objects deeply.
 * @param {object[]} objects - The array of objects to merge.
 * @returns {object} The merged object.
 */
const deepMerge = (objects) => {
    if (!Array.isArray(objects)) {
        throw new TypeError("Expected an array of objects");
    }
    const isObject = (obj) => obj && typeof obj === "object" && !Array.isArray(obj);
    return objects.reduce((acc, obj) => {
        Object.keys(obj).forEach((key) => {
            if (isObject(obj[key])) {
                if (!acc[key]) {
                    acc[key] = {};
                }
                acc[key] = (0, exports.deepMerge)([acc[key], obj[key]]);
            }
            else {
                acc[key] = obj[key];
            }
        });
        return acc;
    }, {});
};
exports.deepMerge = deepMerge;
//# sourceMappingURL=transformers.js.map