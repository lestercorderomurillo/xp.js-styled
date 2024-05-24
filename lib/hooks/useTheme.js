"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const transformers_1 = require("../functions/transformers");
const useTheme = (theme) => {
    var _a, _b;
    const colorScheme = (0, react_native_1.useColorScheme)();
    const windowDimensions = (0, react_native_1.useWindowDimensions)();
    const colors = (0, react_1.useMemo)(() => {
        return (0, transformers_1.media)(theme.colors);
    }, [colorScheme]);
    const styles = (0, react_1.useMemo)(() => {
        return (0, transformers_1.media)(theme.styles, theme.breakpoints);
    }, [colorScheme, windowDimensions]);
    return {
        styles,
        colors,
        sizes: (_a = theme === null || theme === void 0 ? void 0 : theme.sizes) !== null && _a !== void 0 ? _a : {},
        fontSizes: (_b = theme === null || theme === void 0 ? void 0 : theme.fontSizes) !== null && _b !== void 0 ? _b : {}
    };
};
exports.useTheme = useTheme;
//# sourceMappingURL=useTheme.js.map