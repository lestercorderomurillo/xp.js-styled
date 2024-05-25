import React from "react";
import { StyledSchema } from "../types";
import { deepMerge } from "../utils";
import { deepTransform } from "./transformers";

/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
export const createStyled = <TProps extends {}>(Component: React.ComponentType<any>, schema?: StyledSchema) => {
  return ({ ...args }) => {
    const mutableSchema = schema ? { ...schema } : {};

    delete mutableSchema.theme;
    delete mutableSchema.variants;

    const schemaStyle = deepTransform(mutableSchema, schema?.theme);
    const style = deepTransform(args.style, schema?.theme);

    return <Component {...args} style={deepMerge([schemaStyle, style])} />;
  };
};
