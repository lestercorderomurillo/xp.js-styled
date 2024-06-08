"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSample = void 0;
const react_native_1 = require("react-native");
const constants_1 = require("./constants");
const transformers_1 = require("./functions/transformers");
const ColorSample = () => {
  const lumens = [];
  for (let i = 100; i <= 900; i += 50) {
    lumens.push(i);
  }
  let colors = Object.keys(constants_1.ColorPallete);
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
      borderBottomRightRadius: row === numRows - 1 && col === numColumns - 1 ? radius : 0,
    };
  };
  return (
    <react_native_1.FlatList
      numColumns={17}
      data={colorLumens}
      keyExtractor={(item) => `${item.colorName}-${item.lumen}`}
      renderItem={({ item, index }) => (
        <react_native_1.View
          style={{
            backgroundColor: (0, transformers_1.color)(`${item.colorName}.${item.lumen}`),
            height: 25,
            width: 25,
            ...getBorderRadius(index, 17, Math.ceil(colorLumens.length / 17)),
          }}
        />
      )}
    />
  );
};
exports.ColorSample = ColorSample;
//# sourceMappingURL=test.js.map
