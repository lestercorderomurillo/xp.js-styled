"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
    var _a;
    const schemaWithQuery = (0, transformers_1.media)(
      schema !== null && schema !== void 0 ? schema : {},
      (_a = schema === null || schema === void 0 ? void 0 : schema.theme) === null || _a === void 0 ? void 0 : _a.breakpoints,
    );
    delete schemaWithQuery.theme;
    delete schemaWithQuery.variants;
    const schemaStyle = (0, transformers_1.deepTransform)(schemaWithQuery, schema === null || schema === void 0 ? void 0 : schema.theme);
    const style = (0, transformers_1.deepTransform)(args.style, schema === null || schema === void 0 ? void 0 : schema.theme);
    const variantStyle =
      (schema === null || schema === void 0 ? void 0 : schema.variants) &&
      (schema === null || schema === void 0 ? void 0 : schema.variants[args.variant])
        ? (0, transformers_1.deepTransform)(
            schema === null || schema === void 0 ? void 0 : schema.variants[args.variant],
            schema === null || schema === void 0 ? void 0 : schema.theme,
          )
        : {};
    return <Component {...args} style={(0, utils_1.deepMerge)([schemaStyle, style, variantStyle])} />;
  };
};
exports.createStyled = createStyled;
//# sourceMappingURL=createStyled.js.map
