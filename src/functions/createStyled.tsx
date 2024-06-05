import React, { useMemo } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { ComponentStyleProps, StyledProps, StyledSchema } from "../types";
import { deepMerge, deepStyling, normalizeMediaQueries, splitProps } from "./transformers";

/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
export const createStyled = <
  TComponent extends React.ComponentType<{}>,
  TStyleProps = ComponentStyleProps<TComponent>,
  TVariantNames extends string = never,
>(
  Component: TComponent,
  schema?: StyledSchema<TStyleProps, TVariantNames>,
) => {
  return ({
    children,
    ...props
  }: StyledProps<React.ComponentProps<TComponent>, ComponentStyleProps<TComponent>, keyof (typeof schema)["variants"]>) => {
    const deviceColorScheme = useColorScheme();
    const deviceDimensions = useWindowDimensions();

    const compile = (object: any) => (object ? deepStyling(normalizeMediaQueries(object, schema?.theme?.breakpoints), schema?.theme) : {});

    const memoized = useMemo(() => {
      const { style, variant, ...restProps } = props;
      const { elementProps, styleProps } = splitProps(restProps ?? {});

      let parentStyle = {};

      schema?.parentStyles?.forEach(styleName => {
        parentStyle = deepMerge([parentStyle, schema?.theme?.styles[styleName] ?? {}]); 
      });

      const variantStyle = variant && schema?.variants && schema.variants[variant as any] ? schema.variants[variant as any] : {};

      return {
        elementProps,
        parentStyle: compile(parentStyle),
        inlineStyle: compile(style),
        schemaStyle: compile(schema),
        variantStyle: compile(variantStyle),
        overrideStyle: compile(styleProps),
      };
    }, [props, deviceColorScheme, deviceDimensions]);

    return (
      <Component
        {...(children ? { children } : {})}
        {...(memoized.elementProps as any)}
        style={
          deepMerge(
            [memoized.parentStyle, memoized.schemaStyle, memoized.variantStyle, memoized.inlineStyle, memoized.overrideStyle],
            ["children", "style"],
          ) as any
        }
      />
    );
  };
};
