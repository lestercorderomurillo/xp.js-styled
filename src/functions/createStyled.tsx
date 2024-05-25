import React, { useMemo } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { StyledSchema } from "../types";
import { deepMerge } from "../utils";
import { deepTransform, media } from "./transformers";

/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
export const createStyled = <TProps extends {}>(Component: React.ComponentType<any>, schema?: StyledSchema) => {
  return ({ ...args }) => {
    const deviceColorScheme = useColorScheme();
    const deviceDimensions = useWindowDimensions();

    const schemaStyle = useMemo(() => {
      const schemaWithQuery = media(schema ?? {}, schema?.theme?.breakpoints);

      delete schemaWithQuery.theme;
      delete schemaWithQuery.variants;

      return deepTransform(schemaWithQuery, schema?.theme);
    }, [deviceColorScheme, deviceDimensions]);

    const style = deepTransform(args.style, schema?.theme);
    const variantStyle =
      schema?.variants && schema?.variants[args.variant] ? deepTransform(schema?.variants[args.variant], schema?.theme) : {};

    return <Component {...args} style={deepMerge([schemaStyle, style, variantStyle])} />;
  };
};
