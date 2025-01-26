import {
  ActivityIndicator,
  Button,
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
import { createStyledComponent } from "./functions/createStyledComponent";

export const StyledFlex = createStyledComponent(View, {
  flex: 1,
});

export const StyledView = createStyledComponent(View);
export const StyledText = createStyledComponent(Text);
export const StyledImage = createStyledComponent(Image);
export const StyledScrollView = createStyledComponent(ScrollView);
export const StyledTextInput = createStyledComponent(TextInput);
export const StyledTouchableOpacity = createStyledComponent(TouchableOpacity);
export const StyledFlatList = createStyledComponent(FlatList);
export const StyledSectionList = createStyledComponent(SectionList);
export const StyledSafeAreaView = createStyledComponent(SafeAreaView);
export const StyledKeyboardAvoidingView = createStyledComponent(KeyboardAvoidingView);
export const StyledModal = createStyledComponent(Modal);
export const StyledActivityIndicator = createStyledComponent(ActivityIndicator);
export const StyledSwitch = createStyledComponent(Switch);
export const StyledTouchableHighlight = createStyledComponent(TouchableHighlight);
export const StyledTouchableWithoutFeedback = createStyledComponent(TouchableWithoutFeedback);
export const StyledPressable = createStyledComponent(Pressable);

export const StyledXStack = createStyledComponent(View, {
  //flex: 1,
  flexDirection: "row",
});

export const StyledYStack = createStyledComponent(View, {
  //flex: 1,
  flexDirection: "column",
});
