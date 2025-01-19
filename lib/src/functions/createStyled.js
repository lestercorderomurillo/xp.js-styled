"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyled = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const transformers_1 = require("./transformers");
/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A wrapper around your component with extended features.
 */
const createStyled = (Component, schema) => {
    return (0, react_1.forwardRef)((props, ref) => {
        const { children, ...componentProps } = props;
        const deviceColorScheme = (0, react_native_1.useColorScheme)();
        const deviceDimensions = (0, react_native_1.useWindowDimensions)();
        const devicePixels = (0, react_1.useDeferredValue)(deviceDimensions.width * deviceDimensions.height);
        const transpile = (0, react_1.useCallback)((values) => {
            var _a, _b;
            const colorRegex = new RegExp(`\\b(?:${Object.keys({ ...constants_1.ColorPallete, ...(_a = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _a === void 0 ? void 0 : _a.colors }).join("|")})\\.${constants_1.ColorIntensity}\\b`);
            return (0, transformers_1.deepMap)({
                values: (0, transformers_1.normalizeMediaQueries)(values, (_b = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _b === void 0 ? void 0 : _b.breakpoints),
                skipKeys: ["children"],
                match: (value) => (0, utils_1.isString)(value) || typeof value == 'number',
                map: ({ key, value }) => {
                    var _a, _b;
                    if (colorRegex.test(value)) {
                        return (0, transformers_1.color)(value, (_a = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _a === void 0 ? void 0 : _a.colors, (_b = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _b === void 0 ? void 0 : _b.breakpoints);
                    }
                    else if (constants_1.SizeRegex.test(value)) {
                        return (0, transformers_1.size)({ key, value }, schema === null || schema === void 0 ? void 0 : schema.theme);
                    }
                    return value;
                },
            });
        }, [Component, schema]);
        const mergedProps = (0, react_1.useMemo)(() => {
            var _a;
            const { style, variant, ...restProps } = componentProps;
            const { elementProps, styleProps } = (0, transformers_1.splitProps)(restProps !== null && restProps !== void 0 ? restProps : {});
            console.log('debug');
            console.log(elementProps);
            console.log(styleProps);
            let parentStyle = {};
            (_a = schema === null || schema === void 0 ? void 0 : schema.parentStyles) === null || _a === void 0 ? void 0 : _a.forEach((styleName) => {
                var _a, _b;
                parentStyle = (0, transformers_1.deepMerge)([parentStyle, (_b = (_a = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _a === void 0 ? void 0 : _a.styles[styleName]) !== null && _b !== void 0 ? _b : {}]);
            });
            const variantStyle = variant && (schema === null || schema === void 0 ? void 0 : schema.variants) && schema.variants[variant] ? schema.variants[variant] : {};
            return {
                elementProps: elementProps,
                parentStyle: transpile(parentStyle),
                schemaStyle: transpile(schema),
                variantStyle: transpile(variantStyle),
                inlineStyle: transpile(style),
                overrideStyle: transpile(styleProps),
            };
        }, [componentProps, deviceColorScheme, devicePixels]);
        console.log('mergedProps');
        console.log(mergedProps);
        return (<Component ref={ref} {...mergedProps.elementProps} children={children} style={(0, transformers_1.deepMerge)([
                mergedProps.parentStyle,
                mergedProps.schemaStyle,
                mergedProps.variantStyle,
                mergedProps.overrideStyle,
                mergedProps.inlineStyle,
            ], ["children", "style"])}/>);
    });
};
exports.createStyled = createStyled;
//# sourceMappingURL=createStyled.js.map