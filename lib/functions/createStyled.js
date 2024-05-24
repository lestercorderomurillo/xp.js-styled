"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyled = void 0;
const react_1 = __importDefault(require("react"));
const useTheme_1 = require("../hooks/useTheme");
const utils_1 = require("../utils");
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
const createStyled = (Component, schema) => {
    return ({ style, ...args }) => {
        const {} = (0, useTheme_1.useTheme)(schema.theme);
        return <Component {...args} style={(0, utils_1.deepMerge)([style, schema])}/>;
    };
};
exports.createStyled = createStyled;
//# sourceMappingURL=createStyled.js.map