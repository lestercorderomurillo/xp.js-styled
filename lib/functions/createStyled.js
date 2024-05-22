"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyled = void 0;
const react_1 = __importDefault(require("react"));
const useMediaQuery_1 = require("../hooks/useMediaQuery");
const useTheme_1 = require("../hooks/useTheme");
const transformers_1 = require("./transformers");
const createStyled = (Component, schema) => {
    return ({ variant, ...args }) => {
        var _a, _b, _c, _d;
        const { styles } = (0, useTheme_1.useTheme)(schema === null || schema === void 0 ? void 0 : schema.theme);
        const breakpoints = (_b = (_a = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _a === void 0 ? void 0 : _a.schema) === null || _b === void 0 ? void 0 : _b.breakpoints;
        const { resolveMediaQuery } = (0, useMediaQuery_1.useMediaQuery)(breakpoints);
        const parse = (props) => { var _a, _b, _c, _d; return (0, transformers_1.resolveStyleProps)(props, (_b = (_a = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _a === void 0 ? void 0 : _a.schema) === null || _b === void 0 ? void 0 : _b.colors, (_d = (_c = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _c === void 0 ? void 0 : _c.schema) === null || _d === void 0 ? void 0 : _d.sizes); };
        const { props, style } = (0, transformers_1.splitProps)({
            props: args,
            parser: parse,
        });
        let mergedStyle = {};
        (_c = schema === null || schema === void 0 ? void 0 : schema.parentStyles) === null || _c === void 0 ? void 0 : _c.forEach((parentStyleName) => {
            const currentParentStyle = parse(styles === null || styles === void 0 ? void 0 : styles[parentStyleName]);
            mergedStyle = (0, transformers_1.deepMerge)([mergedStyle, currentParentStyle]);
        });
        const schemaStyle = parse({ ...schema, variants: {} });
        const variantStyle = parse((_d = schema === null || schema === void 0 ? void 0 : schema.variants) === null || _d === void 0 ? void 0 : _d[variant]);
        const inlineStyle = parse(args.style);
        return <Component {...props} style={resolveMediaQuery((0, transformers_1.deepMerge)([mergedStyle, schemaStyle, variantStyle, style, inlineStyle]))}/>;
    };
};
exports.createStyled = createStyled;
//# sourceMappingURL=createStyled.js.map