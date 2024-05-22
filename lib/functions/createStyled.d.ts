import React from "react";
import { StyledComponentProps, StyledComponentSchema } from "../types";
export declare const createStyled: <TProps extends {}>(Component: React.ComponentType<any>, schema: StyledComponentSchema) => ({ variant, ...args }: StyledComponentProps<TProps, {}, "primary" | "secondary">) => React.JSX.Element;
