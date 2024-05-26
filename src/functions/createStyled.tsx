import React, { useMemo } from "react";
import { Image, Pressable, StyleProp, Text, useColorScheme, useWindowDimensions, View, ViewStyle } from "react-native";
import useDebouncedState from "../hooks/useDebouncedState";
import { ComponentStyleProps, StyledProps, StyledSchema } from "../types";
import { deepMerge } from "../utils";
import { deepTransform, media, splitProps } from "./transformers";


/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
export const createStyled = <
  TComponent extends React.ComponentType<any>,
  TStyleProps = ComponentStyleProps<TComponent>,
  TVariantNames extends string = never
>(
  Component: TComponent,
  schema?: StyledSchema<TStyleProps, TVariantNames>,
) => {
  return (props: StyledProps<React.ComponentProps<TComponent>, ComponentStyleProps<TComponent>, keyof (typeof schema)["variants"]>) => {
    const deviceColorScheme = useDebouncedState(useColorScheme());
    const deviceDimensions = useDebouncedState(useWindowDimensions());

    const compile = (object: any) => (object ? deepTransform(media(object, schema?.theme?.breakpoints), schema?.theme) : {});

    const memoized = useMemo(() => {
      const { style, variant, ...restProps } = props;

      const { elementProps, styleProps } = splitProps({
        props: restProps,
        parser: compile,
      });

      const variantStyle = variant && schema?.variants && schema.variants[variant as any] ? schema.variants[variant as any] : {};

      return {
        elementProps,
        inlineStyle: compile(style),
        schemaStyle: compile(schema),
        variantStyle: compile(variantStyle),
        overrideStyle: styleProps,
      };
    }, [props, deviceColorScheme, deviceDimensions]);

    return (
      <Component
        {...memoized.elementProps as any}
        style={deepMerge([memoized.schemaStyle, memoized.variantStyle, memoized.inlineStyle, memoized.overrideStyle]) as any}
      />
    );
  };
};

// code examples

export const TEST = createStyled(Text, {
  backgroundColor: "green.700",
  
  "@sm": {
    height: "4sm",
    backgroundColor: "green.600",
  },
  "@ios": {
    //borderRadius: 10,
  },
});

<TEST></TEST>;

export const Card = createStyled(View, {
  backgroundColor: "indigo.800",
  padding: 10,
  margin: 10,
  size: "4md",
});

<Card>...</Card>;
