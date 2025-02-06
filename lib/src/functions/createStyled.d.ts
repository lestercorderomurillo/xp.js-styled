import React from "react";
import { ViewProps } from "react-native";
import { ComponentStyleProps, ShortcutProps, StyledProps, StyledStyle } from "../types";
/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledStyle} schema The style schema.
 * @returns A wrapper around your component with extended features.
 */
export declare const createStyled: <TComponent extends React.ComponentType<any> = React.ComponentType<ViewProps>, TStyleProps = ComponentStyleProps<TComponent> & ShortcutProps, TVariantNames extends string = never>(Component: TComponent, schema?: StyledStyle<TStyleProps, TVariantNames>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<StyledProps<React.ComponentProps<TComponent>, ComponentStyleProps<TComponent>, keyof StyledStyle<TStyleProps, TVariantNames>["variants"]>> & React.RefAttributes<TComponent>>;
