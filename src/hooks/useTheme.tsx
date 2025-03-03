import { createContext, useContext } from "react";
import { color, size } from "../functions/transformers";
import { Responsive, Theme, TypedColor } from "../types";

/**
 * Create the theme context with a default empty theme
 */
const ThemeContext = createContext<{ theme: Theme }>({ theme: {} });

/**
 * Type definition for the theme observable
 */
type ObservableTheme<T extends Theme> = {
  colors: { [K in keyof T["colors"]]: TypedColor };
  breakpoints: Responsive<number>;
  fontSizes: Responsive<number>;
  fontWeights: Responsive<number>;
  spacing: Responsive<number>;
  styles: { [K in keyof T["styles"]]: any };
};

/**
 * Configuration for theme property handlers
 */
const THEME_PROPERTY_HANDLERS = {
  colors: {
    transformer: color,
    defaultValue: undefined,
  },
  fontSizes: {
    transformer: size,
    defaultValue: "sm",
  },
  fontWeights: {
    transformer: size,
    defaultValue: "sm",
  },
  breakpoints: {
    transformer: size,
    defaultValue: "sm",
  },
  spacing: {
    transformer: size,
    defaultValue: "sm",
  },
  styles: {
    transformer: size,
    defaultValue: "sm",
  },
};

/**
 * Hook for accessing theme values with transformations already applied.
 * @returns {ObservableTheme<T>} Proxied theme object with accessor methods
 */
export const useTheme = <T extends Theme>(): ObservableTheme<T> => {
  const { theme } = useContext(ThemeContext as React.Context<{ theme: T }>);

  const handler = {
    get: (target, categoryKey: string) => {
      const propertyHandler = THEME_PROPERTY_HANDLERS[categoryKey];
      if (propertyHandler && categoryKey in target) {
        return new Proxy(
          {},
          {
            get: (_, key: string) => {
              const value = target[categoryKey]?.[key] ?? propertyHandler.defaultValue;
              return value ? propertyHandler.transformer(value, categoryKey === "colors" ? theme.colors ?? {} : theme) : undefined;
            },
          },
        );
      }
      return target[categoryKey];
    },
  };
  return new Proxy(theme, handler);
};

/**
 * Theme provider component for wrapping the application with a customized theme.
 * @param {ThemeProviderProps} props - Provider properties
 * @returns {JSX.Element} Theme provider component
 */
export const ThemeProvider = ({ theme, children }: { theme?: Theme; children? }) => {
  return <ThemeContext.Provider value={{ theme: theme ?? {} }}>{children}</ThemeContext.Provider>;
};
