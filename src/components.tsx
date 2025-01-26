import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { createStyled } from "./functions/createStyled";

export const StyledFlex = createStyled(View, {
  flex: 1,
});

export const StyledView = createStyled(View);
export const StyledText = createStyled(Text);
export const StyledImage = createStyled(Image);
export const StyledScrollView = createStyled(ScrollView);
export const StyledTextInput = createStyled(TextInput);
export const StyledTouchableOpacity = createStyled(TouchableOpacity);
export const StyledFlatList = createStyled(FlatList);
export const StyledSectionList = createStyled(SectionList);
export const StyledSafeAreaView = createStyled(SafeAreaView);
export const StyledKeyboardAvoidingView = createStyled(KeyboardAvoidingView);
export const StyledModal = createStyled(Modal);
export const StyledActivityIndicator = createStyled(ActivityIndicator);
export const StyledSwitch = createStyled(Switch);
export const StyledTouchableHighlight = createStyled(TouchableHighlight);
export const StyledTouchableWithoutFeedback = createStyled(TouchableWithoutFeedback);
export const StyledPressable = createStyled(Pressable);

export const StyledXStack = createStyled(View, {
  //flex: 1,
  flexDirection: "row",
});

export const StyledYStack = createStyled(View, {
  //flex: 1,
  flexDirection: "column",
});
