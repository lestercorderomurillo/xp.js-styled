"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQuery = void 0;
const react_native_1 = require("react-native");
const constants_1 = require("../constants");
const transformers_1 = require("../functions/transformers");
const useMediaQuery = (breakpoints) => {
  const { width } = (0, react_native_1.useWindowDimensions)();
  const colorScheme = (0, react_native_1.useColorScheme)();
  const breakpointsValues = breakpoints !== null && breakpoints !== void 0 ? breakpoints : constants_1.DefaultBreakpoints;
  const resolveMediaQuery = (values) => {
    let output = values;
    const platformSpecificValue = values[`@${react_native_1.Platform.OS}`];
    if (platformSpecificValue) {
      output = (0, transformers_1.deepMerge)([output, platformSpecificValue]);
    }
    const breakpointKeys = Object.keys(breakpointsValues).sort((a, b) => breakpointsValues[a] - breakpointsValues[b]);
    for (const breakpointKey of breakpointKeys) {
      const breakpointValue = breakpointsValues[breakpointKey];
      const mediaQueryValue = values[breakpointKey];
      if (width > breakpointValue && mediaQueryValue) {
        output = (0, transformers_1.deepMerge)([output, mediaQueryValue]);
      }
    }
    if (colorScheme == "dark" && values["@dark"]) {
      output = (0, transformers_1.deepMerge)([output, values["@dark"]]);
    } else if (colorScheme == "light" && values["@light"]) {
      output = (0, transformers_1.deepMerge)([output, values["@light"]]);
    }
    return output;
  };
  return { resolveMediaQuery };
};
exports.useMediaQuery = useMediaQuery;
//# sourceMappingURL=useMediaQuery.js.map
