import { Platform, useColorScheme, useWindowDimensions } from "react-native";
import { DefaultBreakpoints } from "../constants";
import { deepMerge } from "../functions/transformers";
import { SizesSchema, WithMediaQuery } from "../types";

export const useMediaQuery = (breakpoints?: SizesSchema<number>) => {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const breakpointsValues = breakpoints ?? DefaultBreakpoints;

  const resolveMediaQuery = <T = any,>(values: WithMediaQuery<T>) => {
    let output: any = values;
    const platformSpecificValue = values[`@${Platform.OS}`];

    if (platformSpecificValue) {
      output = deepMerge([output, platformSpecificValue]);
    }

    const breakpointKeys = Object.keys(breakpointsValues).sort((a, b) => breakpointsValues[a] - breakpointsValues[b]);

    for (const breakpointKey of breakpointKeys) {
      const breakpointValue = breakpointsValues[breakpointKey];
      const mediaQueryValue = values[breakpointKey];

      if (width > breakpointValue && mediaQueryValue) {
        output = deepMerge([output, mediaQueryValue]);
      }
    }

    if (colorScheme == "dark" && values["@dark"]) {
      output = deepMerge([output, values["@dark"]]);
    } else if (colorScheme == "light" && values["@light"]) {
      output = deepMerge([output, values["@light"]]);
    }

    return output;
  };

  return { resolveMediaQuery };
};
