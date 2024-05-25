import React from "react";
import { StyledSchema } from "../types";
/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
export declare const createStyled: <TProps extends {}>(
  Component: React.ComponentType<any>,
  schema?: StyledSchema,
) => ({ ...args }: { [x: string]: any }) => React.JSX.Element;
