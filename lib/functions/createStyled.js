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
const transformers_1 = require("./transformers");
/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
const createStyled = (Component, schema) => {
    return ({ children, ...props }) => {
        const deviceColorScheme = (0, react_native_1.useColorScheme)();
        const deviceDimensions = (0, react_native_1.useWindowDimensions)();
        const compile = (object) => { var _a; return (object ? (0, transformers_1.deepTransform)((0, transformers_1.media)(object, (_a = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _a === void 0 ? void 0 : _a.breakpoints), schema === null || schema === void 0 ? void 0 : schema.theme) : {}); };
        const memoized = (0, react_1.useMemo)(() => {
            const { style, variant, ...restProps } = props;
            const { elementProps, styleProps } = (0, transformers_1.splitProps)(restProps !== null && restProps !== void 0 ? restProps : {});
            const variantStyle = variant && (schema === null || schema === void 0 ? void 0 : schema.variants) && schema.variants[variant] ? schema.variants[variant] : {};
            return {
                elementProps: compile(elementProps),
                inlineStyle: compile(style),
                schemaStyle: compile(schema),
                variantStyle: compile(variantStyle),
                overrideStyle: compile(styleProps),
            };
        }, [props, deviceColorScheme, deviceDimensions]);
        return (<Component {...(children ? { children } : {})} {...memoized.elementProps} style={(0, transformers_1.deepMerge)([memoized.schemaStyle, memoized.variantStyle, memoized.inlineStyle, memoized.overrideStyle], ['children', 'style'])}/>);
    };
};
exports.createStyled = createStyled;
/*
const StyledView = createStyled(View);
<StyledView />

const StyledFlatList = createStyled(FlatList);
<StyledFlatList data={[]} renderItem={(info: ListRenderItemInfo<unknown>) => <></> } />

const StyledScrollView = createStyled(ScrollView);
<StyledScrollView color="red.400"/>

const StyledImage = createStyled(Image);
<StyledImage color="red.400" />

const StyledText = createStyled(Text);
<StyledText color="red.400" />

const StyledPressable = createStyled(Pressable, {
  theme: {

  },
  backgroundColor: 'red.200',
  variants: {
    one: {

    }
  },
});

<StyledPressable color="red.400" backgroundColor={'indigo.450'} variant="one" />
*/ 
//# sourceMappingURL=createStyled.js.map