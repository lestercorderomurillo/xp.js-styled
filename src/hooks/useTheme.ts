import { useMemo } from "react";
import { Theme } from "../types";
import { useMediaQuery } from "./useMediaQuery";
import { resolveStyleProps } from "../functions/transformers";

export const useTheme = (theme: Theme) => {
  const { resolveMediaQuery } = useMediaQuery(theme.schema.breakpoints);

  const styles = useMemo(() => resolveMediaQuery(theme.schema.styles), [theme]);
  const colors = useMemo(() => resolveStyleProps(theme.schema.colors), [theme]);

  return {
    styles,
    colors,
  };
};
