import { useMemo } from "react";
import { Theme } from "../types";
import { useMediaQuery } from "./useMediaQuery";
import { resolveStyleProps } from "../functions/transformers";

export const useTheme = (theme?: Theme) => {
  const breakpoints = theme?.schema?.breakpoints;
  const stylesSchema = theme?.schema?.styles;
  const colorsSchema = theme?.schema?.colors;

  const { resolveMediaQuery } = useMediaQuery(breakpoints);

  const styles = useMemo(() => stylesSchema ? resolveMediaQuery(stylesSchema) : {}, [stylesSchema, resolveMediaQuery]);
  const colors = useMemo(() => colorsSchema ? resolveStyleProps(colorsSchema) : {}, [colorsSchema]);

  return {
    styles,
    colors,
  };
};