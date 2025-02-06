import React, { forwardRef, useDeferredValue, useMemo } from "react";
import { useColorScheme, useWindowDimensions, ViewProps } from "react-native";
import { ColorIntensity, ColorPallete, SizeRegex } from "../constants";
import { usePropHash } from "../hooks/usePropHash";
import { useTheme } from "../hooks/useTheme";
import { ComponentStyleProps, ShortcutProps, StyledProps, StyledStyle, Theme } from "../types";
import { isString } from "../utils";
import { color, deepMap, deepMerge, mapShortcutProps, normalizeMediaQueries as flatMediaQueries, size, splitProps } from "./transformers";

const transpile = (values: unknown, theme?: Theme) => {
  const colorRegex = new RegExp(`\\b(?:${Object.keys({ ...ColorPallete, ...theme?.colors }).join("|")})\\.${ColorIntensity}\\b`);

  return deepMap({
    values: flatMediaQueries(values, theme?.breakpoints),
    skipKeys: ["children"],
    match: (value) => isString(value) || typeof value == "number",
    map: ({ key, value }) => {
      if (colorRegex.test(value)) {
        return color(value, theme?.colors, theme?.breakpoints);
      } else if (SizeRegex.test(value)) {
        return size({ key, value }, theme);
      }
      return value;
    },
  });
};

/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledStyle} schema The style schema.
 * @returns A wrapper around your component with extended features.
 */
export const createStyled = <
  TComponent extends React.ComponentType<any> = React.ComponentType<ViewProps>,
  TStyleProps = ComponentStyleProps<TComponent> & ShortcutProps,
  TVariantNames extends string = never,
>(
  Component: TComponent,
  schema?: StyledStyle<TStyleProps, TVariantNames>,
) => {
  return forwardRef(
    (
      props: StyledProps<React.ComponentProps<TComponent>, ComponentStyleProps<TComponent>, keyof (typeof schema)["variants"]>,
      ref: React.Ref<TComponent>,
    ) => {
      const { children, ...componentProps } = props;
      const _theme: any = useTheme();
      const theme: Theme = _theme;

      const deviceColorScheme = useColorScheme();
      const deviceDimensions = useWindowDimensions();
      const devicePixels = useDeferredValue(deviceDimensions.width * deviceDimensions.height);

      // Stable hash for componentProps
      const hash = usePropHash(componentProps, [Component, schema, deviceColorScheme, devicePixels]);

      const mergedProps = useMemo(() => {
        const { style, variant, ...restProps } = componentProps;
        const { elementProps, styleProps } = splitProps(restProps ?? {});

        let parentStyle = {};

        schema?.parentStyles?.forEach((styleName) => {
          parentStyle = deepMerge([parentStyle, theme?.styles[styleName] ?? {}]);
        });

        const variantStyle = variant && schema?.variants && schema.variants[variant as any] ? schema.variants[variant as any] : {};

        const transpiledStyles = {
          parentStyle: transpile(parentStyle, theme),
          schemaStyle: transpile(schema, theme),
          variantStyle: transpile(variantStyle, theme),
          inlineStyle: transpile(style, theme),
          overrideStyle: transpile(styleProps, theme),
        };

        return {
          elementProps: elementProps as any,
          styleProps: mapShortcutProps(
            deepMerge(
              [
                transpiledStyles.parentStyle,
                transpiledStyles.schemaStyle,
                transpiledStyles.variantStyle,
                transpiledStyles.overrideStyle,
                transpiledStyles.inlineStyle,
              ],
              ["children", "style"],
            ),
          ),
        };
      }, [hash]); 

      return <Component ref={ref} {...mergedProps.elementProps} children={children} style={mergedProps.styleProps} />;
    },
  );
};
