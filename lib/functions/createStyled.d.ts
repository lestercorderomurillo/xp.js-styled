import React from "react";
import { ComponentStyleProps, StyledProps, StyledSchema } from "../types";
/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A wrapper around your component with extended features.
 */
export declare const createStyled: <
  TComponent extends React.ComponentType<{}>,
  TStyleProps = ComponentStyleProps<TComponent>,
  TVariantNames extends string = never,
>(
  Component: TComponent,
  schema?: StyledSchema<TStyleProps, TVariantNames>,
) => ({
  children,
  ...props
}: StyledProps<
  React.ComponentProps<TComponent>,
  ComponentStyleProps<TComponent>,
  keyof StyledSchema<TStyleProps, TVariantNames>["variants"]
>) => React.JSX.Element;
