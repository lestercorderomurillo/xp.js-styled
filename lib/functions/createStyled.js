"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyled = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../utils");
const transformers_1 = require("./transformers");
/**
 * Create a Styled Component given a style schema and a base theme (both optional).
 * @param {React.ComponentType<any>} Component The component to render.
 * @param {StyledSchema} schema The style schema.
 * @returns A HOC wrapper around your component with extended features.
 */
const createStyled = (Component, schema) => {
    return ({ ...args }) => {
        const mutableSchema = schema ? { ...schema } : {};
        const schemaStyle = (0, transformers_1.deepTransform)(mutableSchema, schema === null || schema === void 0 ? void 0 : schema.theme);
        const style = (0, transformers_1.deepTransform)(args.style, schema === null || schema === void 0 ? void 0 : schema.theme);
        delete mutableSchema.theme;
        delete mutableSchema.variants;
        return <Component {...args} style={(0, utils_1.deepMerge)([schemaStyle, style])}/>;
    };
};
exports.createStyled = createStyled;
//# sourceMappingURL=createStyled.js.map