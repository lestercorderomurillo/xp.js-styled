import React, { useMemo } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { ColorIntensity, ColorPallete, SizeRegex } from "../constants";
import { ComponentStyleProps, StyledProps, StyledSchema } from "../types";
import { isString } from "../utils";
import { color, deepMap, deepMerge, normalizeMediaQueries as flatMediaQueries, size, splitProps } from "./transformers";

/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A wrapper around your component with extended features.
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

    const transpile = (values: unknown) => {
      const colorRegex = new RegExp(
        `\\b(?:${Object.keys({ ...ColorPallete, ...schema?.theme?.colors }).join("|")})\\.${ColorIntensity}\\b`,
      );

      return deepMap({
        values: flatMediaQueries(values, schema?.theme.breakpoints),
        skipKeys: ["children"],
        match: (value) => isString(value),
        map: ({ key, value }) => {
          if (colorRegex.test(value)) {
            return color(value, schema?.theme?.colors, schema?.theme.breakpoints);
          } else if (SizeRegex.test(value)) {
            return size({ key, value }, schema?.theme);
          }
          return value;
        },
      });
    };

    const memoized = useMemo(() => {
      const { style, variant, ...restProps } = props;
      const { elementProps, styleProps } = splitProps(restProps ?? {});

      let parentStyle = {};

      schema?.parentStyles?.forEach((styleName) => {
        parentStyle = deepMerge([parentStyle, schema?.theme?.styles[styleName] ?? {}]);
      });

      const variantStyle = variant && schema?.variants && schema.variants[variant as any] ? schema.variants[variant as any] : {};

      return {
        elementProps,
        parentStyle: transpile(parentStyle),
        inlineStyle: transpile(style),
        schemaStyle: transpile(schema),
        variantStyle: transpile(variantStyle),
        overrideStyle: transpile(styleProps),
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
