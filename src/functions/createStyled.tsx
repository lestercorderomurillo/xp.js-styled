import React, { useMemo } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { StyledProps, StyledSchema } from "../types";
import { deepMerge } from "../utils";
import { deepTransform, media } from "./transformers";

/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
export const createStyled = <TProps extends {}, TVariantNames extends string>(
  Component: React.ComponentType<any>,
  schema?: StyledSchema<{}, TVariantNames>,
) => {
  return ({ ...args }: StyledProps<{}, {}, keyof (typeof schema)["variants"]>) => {
    const deviceColorScheme = useColorScheme();
    const deviceDimensions = useWindowDimensions();

    const memo = useMemo(() => {
      const schemaStyle = deepTransform(media(schema ?? {}, schema?.theme?.breakpoints), schema?.theme);
      const style = deepTransform(args.style, schema?.theme);
      const variantStyle =
        schema?.variants && args?.variant && schema?.variants[args.variant]
          ? deepTransform(schema?.variants[args.variant], schema?.theme)
          : {};

      return {
        style,
        variantStyle,
        schemaStyle,
      };
    }, [deviceColorScheme, deviceDimensions]);

    return <Component {...args} style={deepMerge([memo.schemaStyle, memo.style, memo.variantStyle])} />;
  };
};
