import React, { useCallback, useDeferredValue, useMemo } from "react";
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
    ...componentProps
  }: StyledProps<React.ComponentProps<TComponent>, ComponentStyleProps<TComponent>, keyof (typeof schema)["variants"]>) => {

    const deviceColorScheme = useColorScheme();
    const deviceDimensions = useWindowDimensions();
    const devicePixels = useDeferredValue(deviceDimensions.width * deviceDimensions.height);

    const transpile = useCallback((values: unknown) => {

      const colorRegex = new RegExp(
        `\\b(?:${Object.keys({ ...ColorPallete, ...schema?.theme?.colors }).join("|")})\\.${ColorIntensity}\\b`,
      );

      return deepMap({
        values: flatMediaQueries(values, schema?.theme?.breakpoints),
        skipKeys: ["children"],
        match: (value) => isString(value),
        map: ({ key, value }) => {
          if (colorRegex.test(value)) {
            return color(value, schema?.theme?.colors, schema?.theme?.breakpoints);
          } else if (SizeRegex.test(value)) {
            return size({ key, value }, schema?.theme);
          }
          return value;
        },
      });

    }, [Component, schema]);

    const props = useMemo(() => {
      const { style, variant, ...restProps } = componentProps;
      const { elementProps, styleProps } = splitProps(restProps ?? {});

      let parentStyle = {};

      schema?.parentStyles?.forEach((styleName) => {
        parentStyle = deepMerge([parentStyle, schema?.theme?.styles[styleName] ?? {}]);
      });

      const variantStyle = variant && schema?.variants && schema.variants[variant as any] ? schema.variants[variant as any] : {};

      return {
        elementProps: elementProps as any,
        parentStyle: transpile(parentStyle),
        inlineStyle: transpile(style),
        schemaStyle: transpile(schema),
        variantStyle: transpile(variantStyle),
        overrideStyle: transpile(styleProps),
      };

    }, [componentProps, deviceColorScheme, devicePixels]);

    return (
      <Component
        {...props.elementProps}
        children={children}
        style={
          deepMerge(
            [props.parentStyle, props.schemaStyle, props.variantStyle, props.inlineStyle, props.overrideStyle],
            ["children", "style"],
          )
        }
      />
    );
  };
};
