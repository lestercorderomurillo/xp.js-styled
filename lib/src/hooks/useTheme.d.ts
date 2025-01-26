import { Theme } from "../types";
/**
 * Hook for accessing theme values with transformations already applied.
 * @returns {ThemeConsumer} Proxied theme object with accessor methods
 */
export declare const useTheme: () => any;
/**
 * Theme provider component for wrapping the application with a customized theme.
 * @param {ThemeProviderProps} props - Provider properties
 * @returns {JSX.Element} Theme provider component
 */
export declare const ThemeProvider: ({ theme, children }: {
    theme?: Theme;
    children?: any;
}) => import("react").JSX.Element;
