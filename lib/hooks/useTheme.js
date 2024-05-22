"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const react_1 = require("react");
const useMediaQuery_1 = require("./useMediaQuery");
const transformers_1 = require("../functions/transformers");
const useTheme = (theme) => {
    var _a, _b, _c;
    const breakpoints = (_a = theme === null || theme === void 0 ? void 0 : theme.schema) === null || _a === void 0 ? void 0 : _a.breakpoints;
    const stylesSchema = (_b = theme === null || theme === void 0 ? void 0 : theme.schema) === null || _b === void 0 ? void 0 : _b.styles;
    const colorsSchema = (_c = theme === null || theme === void 0 ? void 0 : theme.schema) === null || _c === void 0 ? void 0 : _c.colors;
    const { resolveMediaQuery } = (0, useMediaQuery_1.useMediaQuery)(breakpoints);
    const styles = (0, react_1.useMemo)(() => stylesSchema ? resolveMediaQuery(stylesSchema) : {}, [stylesSchema, resolveMediaQuery]);
    const colors = (0, react_1.useMemo)(() => colorsSchema ? (0, transformers_1.resolveStyleProps)(colorsSchema) : {}, [colorsSchema]);
    return {
        styles,
        colors,
    };
};
exports.useTheme = useTheme;
//# sourceMappingURL=useTheme.js.map