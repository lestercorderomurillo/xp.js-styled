"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledYStack = exports.StyledXStack = exports.StyledPressable = exports.StyledTouchableWithoutFeedback = exports.StyledTouchableHighlight = exports.StyledSwitch = exports.StyledActivityIndicator = exports.StyledModal = exports.StyledKeyboardAvoidingView = exports.StyledSafeAreaView = exports.StyledSectionList = exports.StyledFlatList = exports.StyledTouchableOpacity = exports.StyledTextInput = exports.StyledScrollView = exports.StyledImage = exports.StyledText = exports.StyledView = exports.StyledFlex = void 0;
const react_native_1 = require("react-native");
const createStyled_1 = require("./functions/createStyled");
exports.StyledFlex = (0, createStyled_1.createStyled)(react_native_1.View, {
    flex: 1,
});
exports.StyledView = (0, createStyled_1.createStyled)(react_native_1.View);
exports.StyledText = (0, createStyled_1.createStyled)(react_native_1.Text);
exports.StyledImage = (0, createStyled_1.createStyled)(react_native_1.Image);
exports.StyledScrollView = (0, createStyled_1.createStyled)(react_native_1.ScrollView);
exports.StyledTextInput = (0, createStyled_1.createStyled)(react_native_1.TextInput);
exports.StyledTouchableOpacity = (0, createStyled_1.createStyled)(react_native_1.TouchableOpacity);
exports.StyledFlatList = (0, createStyled_1.createStyled)(react_native_1.FlatList);
exports.StyledSectionList = (0, createStyled_1.createStyled)(react_native_1.SectionList);
exports.StyledSafeAreaView = (0, createStyled_1.createStyled)(react_native_1.SafeAreaView);
exports.StyledKeyboardAvoidingView = (0, createStyled_1.createStyled)(react_native_1.KeyboardAvoidingView);
exports.StyledModal = (0, createStyled_1.createStyled)(react_native_1.Modal);
exports.StyledActivityIndicator = (0, createStyled_1.createStyled)(react_native_1.ActivityIndicator);
exports.StyledSwitch = (0, createStyled_1.createStyled)(react_native_1.Switch);
exports.StyledTouchableHighlight = (0, createStyled_1.createStyled)(react_native_1.TouchableHighlight);
exports.StyledTouchableWithoutFeedback = (0, createStyled_1.createStyled)(react_native_1.TouchableWithoutFeedback);
exports.StyledPressable = (0, createStyled_1.createStyled)(react_native_1.Pressable);
exports.StyledXStack = (0, createStyled_1.createStyled)(react_native_1.View, {
    //flex: 1,
    flexDirection: "row",
});
exports.StyledYStack = (0, createStyled_1.createStyled)(react_native_1.View, {
    //flex: 1,
    flexDirection: "column",
});
//# sourceMappingURL=components.js.map