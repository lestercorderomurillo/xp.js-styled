"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyled = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../utils");
const transformers_1 = require("./transformers");
/*export const createStyled = <TProps extends {}>(Component: React.ComponentType<any>, schema: StyledSchema) => {
  return ({ variant, ...args }: StyledProps<TProps, {}, "primary" | "secondary">) => {
    const { styles } = useTheme(schema?.theme);
    const breakpoints = schema?.theme?.schema?.breakpoints;
    const { resolveMediaQuery } = useMediaQuery(breakpoints);

    const parse = (props) => resolveStyleProps(props, schema?.theme?.schema?.colors, schema?.theme?.schema?.sizes);

    const { props, style } = splitProps({
      props: args,
      parser: parse,
    });

    let mergedStyle = {};
    schema?.parentStyles?.forEach((parentStyleName) => {
      const currentParentStyle = parse(styles?.[parentStyleName]);
      mergedStyle = deepMerge([mergedStyle, currentParentStyle]);
    });

    const schemaStyle = parse({ ...(schema as any), variants: {} });
    const variantStyle = parse(schema?.variants?.[variant]);
    const inlineStyle = parse(args.style);

    return <Component {...props} style={resolveMediaQuery(deepMerge([mergedStyle, schemaStyle, variantStyle, style, inlineStyle]))} />;
  };
};*/
/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
const createStyled = (Component, schema) => {
    return ({ ...args }) => {
        //const {} = useTheme(schema.theme);
        const mutableSchema = schema ? { ...schema } : {};
        delete mutableSchema.theme;
        delete mutableSchema.variants;
        return <Component {...args} style={(0, utils_1.deepMerge)([(0, transformers_1.deepTransform)(mutableSchema, schema === null || schema === void 0 ? void 0 : schema.theme), args === null || args === void 0 ? void 0 : args.style])}/>;
    };
};
exports.createStyled = createStyled;
//# sourceMappingURL=createStyled.js.map