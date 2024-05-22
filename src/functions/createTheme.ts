import { Theme, ThemeSchema } from "../types";

export const createTheme = (schema: ThemeSchema): Theme => {
  return {
    schema,
  };
};
