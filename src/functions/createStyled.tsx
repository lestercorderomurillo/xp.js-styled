import React, { useMemo } from "react";
import { FlatList, Image, ListRenderItemInfo, Pressable, ScrollView, Text, useColorScheme, useWindowDimensions, View } from "react-native";
import { ComponentStyleProps, StyledProps, StyledSchema } from "../types";
import { deepMerge, deepTransform, media, splitProps } from "./transformers";

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

    const compile = (object: any) => (object ? deepTransform(media(object, schema?.theme?.breakpoints), schema?.theme) : {});

    const memoized = useMemo(() => {
      const { style, variant, ...restProps } = props;
      const { elementProps, styleProps } = splitProps(restProps ?? {});

      const variantStyle = variant && schema?.variants && schema.variants[variant as any] ? schema.variants[variant as any] : {};

      return {
        elementProps: elementProps,
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
        style={deepMerge([memoized.schemaStyle, memoized.variantStyle, memoized.inlineStyle, memoized.overrideStyle], ['children', 'style']) as any}
      />
    );
  };
};

/*
const StyledView = createStyled(View);
<StyledView />

const StyledFlatList = createStyled(FlatList);
<StyledFlatList data={[]} renderItem={(info: ListRenderItemInfo<unknown>) => <></> } />

const StyledScrollView = createStyled(ScrollView);
<StyledScrollView color="red.400"/>

const StyledImage = createStyled(Image);
<StyledImage color="red.400" />

const StyledText = createStyled(Text);
<StyledText color="red.400" />

const StyledPressable = createStyled(Pressable, {
  theme: {

  },
  backgroundColor: 'red.200',
  variants: {
    one: {

    }
  },
});

<StyledPressable color="red.400" backgroundColor={'indigo.450'} variant="one" />
*/