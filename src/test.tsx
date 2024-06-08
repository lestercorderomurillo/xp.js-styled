import { FlatList, View } from "react-native";
import { ColorPallete } from "./constants";
import { color } from "./functions/transformers";

export const ColorSample = () => {
    const lumens = [];
    for (let i = 100; i <= 900; i += 50) {
      lumens.push(i);
    }
  
    let colors = Object.keys(ColorPallete);
    colors.pop();
  
    const colorLumens = [];
    colors.forEach((colorName) => {
      lumens.forEach((lumen) => {
        colorLumens.push({ colorName, lumen });
      });
    });
  
    const getBorderRadius = (index, numColumns, numRows) => {
      const row = Math.floor(index / numColumns);
      const col = index % numColumns;
      const radius = 12.5;
  
      return {
        borderTopLeftRadius: row === 0 && col === 0 ? radius : 0,
        borderTopRightRadius: row === 0 && col === numColumns - 1 ? radius : 0,
        borderBottomLeftRadius: row === numRows - 1 && col === 0 ? radius : 0,
        borderBottomRightRadius:
          row === numRows - 1 && col === numColumns - 1 ? radius : 0,
      };
    };
  
    return (
      <FlatList
        numColumns={17}
        data={colorLumens}
        keyExtractor={(item) => `${item.colorName}-${item.lumen}`}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: color(`${item.colorName}.${item.lumen}`),
              height: 25,
              width: 25,
              ...getBorderRadius(index, 17, Math.ceil(colorLumens.length / 17)),
            }}
          />
        )}
      />
    );
  };
  