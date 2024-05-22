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
        const { styles } = (0, useTheme_1.useTheme)(schema.theme);
        const { resolveMediaQuery } = (0, useMediaQuery_1.useMediaQuery)(schema.theme.schema.breakpoints);
        const parse = (props) => (0, transformers_1.resolveStyleProps)(props, schema.theme.schema.colors, schema.theme.schema.sizes);
        const { props, style } = (0, transformers_1.splitProps)({
            props: args,
            parser: parse,
        });
        let mergedStyle = {};
        schema.parentStyles.forEach((parentStyleName) => {
            const currentParentStyle = parse(styles[parentStyleName]);
            mergedStyle = (0, transformers_1.deepMerge)([mergedStyle, currentParentStyle]);
        });
        const schemaStyle = parse({ ...schema, variants: {} });
        const variantStyle = parse(schema.variants[variant]);
        const inlineStyle = parse(args.style);
        return <Component {...props} style={resolveMediaQuery((0, transformers_1.deepMerge)([mergedStyle, schemaStyle, variantStyle, style, inlineStyle]))}/>;
    };
};
exports.createStyled = createStyled;
//# sourceMappingURL=createStyled.js.map