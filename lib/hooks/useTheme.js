"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const react_1 = require("react");
const useMediaQuery_1 = require("./useMediaQuery");
const transformers_1 = require("../functions/transformers");
const useTheme = (theme) => {
    const { resolveMediaQuery } = (0, useMediaQuery_1.useMediaQuery)(theme.schema.breakpoints);
    const styles = (0, react_1.useMemo)(() => resolveMediaQuery(theme.schema.styles), [theme]);
    const colors = (0, react_1.useMemo)(() => (0, transformers_1.resolveStyleProps)(theme.schema.colors), [theme]);
    return {
        styles,
        colors,
    };
};
exports.useTheme = useTheme;
//# sourceMappingURL=useTheme.js.map