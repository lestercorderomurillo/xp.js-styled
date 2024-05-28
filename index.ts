import { View } from "react-native";
import { createStyled } from "./lib/functions/createStyled";

export { createStyled } from "./lib/functions/createStyled";
export { createTheme } from "./lib/functions/createTheme";
export { color, deepColor, deepMap, deepSize, deepTransform, media, shade, size } from "./lib/functions/transformers";

export const StyledView = createStyled(View, {
    backgroundColor: "blueViolet.800",
    padding: 20,
    "@md": {
      backgroundColor: "blueViolet.700",
      padding: 25,
    },
    
  });