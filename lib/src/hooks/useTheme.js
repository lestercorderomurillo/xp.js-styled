"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = exports.useTheme = void 0;
const react_1 = require("react");
const transformers_1 = require("../functions/transformers");
/**
 * Create the theme context with a default empty theme
 */
const ThemeContext = (0, react_1.createContext)({ theme: {} });
/**
 * Configuration for theme property handlers
 */
const THEME_PROPERTY_HANDLERS = {
    'colors': {
        transformer: transformers_1.color, defaultValue: 'black'
    },
    'fontSizes': {
        transformer: transformers_1.size, defaultValue: 'sm'
    },
    'fontWeights': {
        transformer: transformers_1.size, defaultValue: 'sm'
    },
    'breakpoints': {
        transformer: transformers_1.size, defaultValue: 'sm'
    },
    'spacing': {
        transformer: transformers_1.size, defaultValue: 'sm'
    },
    'styles': {
        transformer: transformers_1.size, defaultValue: 'sm'
    }
};
/**
 * Hook for accessing theme values with transformations already applied.
 * @returns {ThemeConsumer} Proxied theme object with accessor methods
 */
const useTheme = () => {
    const { theme } = (0, react_1.useContext)(ThemeContext);
    const handler = {
        get: (target, categoryKey) => {
            const propertyHandler = THEME_PROPERTY_HANDLERS[categoryKey];
            if (propertyHandler && categoryKey in target) {
                return new Proxy({}, {
                    get: (_, key) => {
                        var _a, _b, _c;
                        const value = (_b = (_a = target[categoryKey]) === null || _a === void 0 ? void 0 : _a[key]) !== null && _b !== void 0 ? _b : propertyHandler.defaultValue;
                        return propertyHandler.transformer(value, categoryKey === 'colors' ? ((_c = theme.colors) !== null && _c !== void 0 ? _c : {}) : theme);
                    }
                });
            }
            return target[categoryKey];
        }
    };
    return new Proxy(theme, handler);
};
exports.useTheme = useTheme;
/**
 * Theme provider component for wrapping the application with a customized theme.
 * @param {ThemeProviderProps} props - Provider properties
 * @returns {JSX.Element} Theme provider component
 */
const ThemeProvider = ({ theme, children }) => {
    return <ThemeContext.Provider value={{ theme: theme !== null && theme !== void 0 ? theme : {} }}>{children}</ThemeContext.Provider>;
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=useTheme.js.map