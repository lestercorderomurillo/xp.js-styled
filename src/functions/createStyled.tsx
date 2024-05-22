import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useTheme } from "../hooks/useTheme";
import { StyledComponentProps, StyledComponentSchema } from "../types";
import { deepMerge, resolveStyleProps, splitProps } from "./transformers";

export const createStyled = <TProps extends {}>(Component: React.ComponentType<any>, schema: StyledComponentSchema) => {
  return ({ variant, ...args }: StyledComponentProps<TProps, {}, "primary" | "secondary">) => {
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
};