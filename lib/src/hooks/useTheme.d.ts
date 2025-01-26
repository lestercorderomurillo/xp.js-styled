import { Responsive, Theme } from "../types";
/**
 * Type definition for the theme observable
 */
type ObservableTheme<T extends Theme> = {
    colors: keyof T['colors'];
    breakpoints: Responsive<number>;
    fontSizes: Responsive<number>;
    fontWeights: Responsive<number>;
    spacing: Responsive<number>;
    styles: keyof T['styles'];
};
/**
 * Hook for accessing theme values with transformations already applied.
 * @returns {ObservableTheme<T>} Proxied theme object with accessor methods
 */
export declare const useTheme: <T extends Theme>() => ObservableTheme<T>;
/**
 * Theme provider component for wrapping the application with a customized theme.
 * @param {ThemeProviderProps} props - Provider properties
 * @returns {JSX.Element} Theme provider component
 */
export declare const ThemeProvider: ({ theme, children }: {
    theme?: Theme;
    children?: any;
}) => import("react").JSX.Element;
export {};
