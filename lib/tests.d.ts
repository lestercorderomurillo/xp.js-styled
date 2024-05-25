import React from "react";
export declare const Theme: import("./types").Theme;
export declare const StyledView: ({
  variant,
  ...args
}: import("./types").StyledComponentProps<{}, {}, "primary" | "secondary">) => React.JSX.Element;
export declare const StyledButton: ({
  variant,
  ...args
}: import("./types").StyledComponentProps<{}, {}, "primary" | "secondary">) => React.JSX.Element;
export { StyledView as View };
