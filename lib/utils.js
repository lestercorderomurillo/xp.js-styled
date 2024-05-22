"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJSON = exports.isStyle = exports.isEvent = void 0;
const constants_1 = require("./constants");
const isEvent = (key) => key.startsWith("on") && key.length > 2;
exports.isEvent = isEvent;
const isStyle = (key) => constants_1.StyleProps.some((prop) => key.includes(prop));
exports.isStyle = isStyle;
const isJSON = (obj) => {
    try {
        JSON.parse(obj);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isJSON = isJSON;
//# sourceMappingURL=utils.js.map