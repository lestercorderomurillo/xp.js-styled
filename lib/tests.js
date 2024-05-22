"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = exports.StyledButton = exports.StyledView = exports.Theme = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const createStyled_1 = require("./functions/createStyled");
const createTheme_1 = require("./functions/createTheme");
exports.Theme = (0, createTheme_1.createTheme)({
    colors: {
        primary: "indigo.400",
        secondary: "indigo",
    },
    styles: {
        container: {
            padding: 5,
            margin: 5,
        },
    },
});
exports.StyledView = (0, createStyled_1.createStyled)(react_native_1.View, {
    padding: 0,
    margin: 0,
});
exports.View = exports.StyledView;
exports.StyledButton = (0, createStyled_1.createStyled)(react_native_1.Button, {
    theme: exports.Theme,
    parentStyles: ['container'],
    padding: 2,
    variants: {
        primary: {
            backgroundColor: "red.750",
        },
    },
});
react_1.default.createElement(exports.StyledView, null);
react_1.default.createElement(exports.StyledButton, null);
