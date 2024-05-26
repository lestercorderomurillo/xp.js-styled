import React, { useMemo } from "react";
import { useColorScheme, useWindowDimensions, View, ViewProps, ViewStyle } from "react-native";
import { StyledProps, StyledSchema } from "../types";
import { deepMerge } from "../utils";
import { deepTransform, media, splitProps } from "./transformers";
import useDebouncedState from "../hooks/useDebouncedState";

/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
export const createStyled = <TProps extends {}, TStyleProps = ViewStyle, TVariantNames extends string = string>(
  Component: React.ComponentType<any>,
  schema?: StyledSchema<{}, TVariantNames>,
) => {
  return ({ ...args }: StyledProps<TProps, TStyleProps, keyof (typeof schema)["variants"]>) => {

    const deviceColorScheme = useDebouncedState(useColorScheme());
    const deviceDimensions = useDebouncedState(useWindowDimensions());      
    
    const compile = (object: any) => object ? deepTransform(media(object, schema?.theme?.breakpoints), schema?.theme) : {};

    const memoized = useMemo(() => {
      const { style, variant } = args;

      const {elementProps, styleProps} = splitProps({
        props: args,
        parser: compile
      });

      return {
        elementProps,
        inlineStyle: compile(style),
        schemaStyle: compile(schema),
        variantStyle: compile(variant ? schema?.variants[variant] : {}),
        overrideStyle: styleProps
      };

    }, [args, deviceColorScheme, deviceDimensions]);

    return <Component {...memoized.elementProps} style={deepMerge([memoized.schemaStyle, memoized.variantStyle, memoized.inlineStyle, memoized.overrideStyle])} />;
  };
};

const SideBarContainer = createStyled(View, {
  backgroundColor: "gray.800",
  height: "100%",
  width: 100,
  alignItems: "center",
  padding: 25,
  variants: {
    tesla: {
      
    },
    octane: {

    }
  }
});

<SideBarContainer variant="tesla" backgroundColor={'red.500'} size={'3us'} alignContent="center" />