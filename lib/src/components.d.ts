import { ActivityIndicator, FlatList, Image, KeyboardAvoidingView, Modal, SafeAreaView, ScrollView, SectionList, Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
export declare const StyledFlex: import("react").ForwardRefExoticComponent<{
    variant?: never;
    children?: import("react").ReactNode;
    style?: import("./types").WithMediaQuery<import("./types").PatchProps<import("react-native").ViewStyle>>;
} & import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
    color?: import("./types").TypedColor;
    shadowColor?: import("./types").TypedColor;
    backgroundColor?: import("./types").TypedColor;
} & {
    [x: `${string}Color`]: import("./types").TypedColor;
} & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
    "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
} & {
    "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
} & import("react").RefAttributes<typeof View>>;
export declare const StyledView: import("react").ForwardRefExoticComponent<{
    variant?: never;
    children?: import("react").ReactNode;
    style?: import("./types").WithMediaQuery<import("./types").PatchProps<import("react-native").ViewStyle>>;
} & import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
    color?: import("./types").TypedColor;
    shadowColor?: import("./types").TypedColor;
    backgroundColor?: import("./types").TypedColor;
} & {
    [x: `${string}Color`]: import("./types").TypedColor;
} & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
    "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
} & {
    "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
} & import("react").RefAttributes<typeof View>>;
export declare const StyledText: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").TextProps, import("react-native").StyleProp<import("react-native").TextStyle>, never> & import("react").RefAttributes<typeof Text>>;
export declare const StyledImage: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").ImageProps, import("react-native").StyleProp<import("react-native").ImageStyle>, never> & import("react").RefAttributes<typeof Image>>;
export declare const StyledScrollView: import("react").ForwardRefExoticComponent<{
    variant?: never;
    children?: import("react").ReactNode;
    style?: import("./types").WithMediaQuery<import("./types").PatchProps<import("react-native").ViewStyle>>;
} & import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
    color?: import("./types").TypedColor;
    shadowColor?: import("./types").TypedColor;
    backgroundColor?: import("./types").TypedColor;
} & {
    [x: `${string}Color`]: import("./types").TypedColor;
} & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
    "@ios"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@android"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@windows"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@macos"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@web"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@light"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@dark"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
} & {
    "@xxs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xs"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@sm"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@md"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@lg"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xxl"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ScrollViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
} & import("react").RefAttributes<typeof ScrollView>>;
export declare const StyledTextInput: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").TextInputProps, import("react-native").StyleProp<import("react-native").TextStyle>, never> & import("react").RefAttributes<typeof TextInput>>;
export declare const StyledTouchableOpacity: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").TouchableOpacityProps, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof TouchableOpacity>>;
export declare const StyledFlatList: import("react").ForwardRefExoticComponent<{
    variant?: never;
    children?: import("react").ReactNode;
    style?: import("./types").WithMediaQuery<import("./types").PatchProps<import("react-native").ViewStyle>>;
} & import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
    color?: import("./types").TypedColor;
    shadowColor?: import("./types").TypedColor;
    backgroundColor?: import("./types").TypedColor;
} & {
    [x: `${string}Color`]: import("./types").TypedColor;
} & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
    "@ios"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@android"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@windows"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@macos"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@web"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@light"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@dark"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
} & {
    "@xxs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xs"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@sm"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@md"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@lg"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xxl"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").FlatListProps<unknown> & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
} & import("react").RefAttributes<typeof FlatList>>;
export declare const StyledSectionList: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").SectionListProps<unknown, unknown>, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof SectionList>>;
export declare const StyledSafeAreaView: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").ViewProps, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof SafeAreaView>>;
export declare const StyledKeyboardAvoidingView: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").KeyboardAvoidingViewProps, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof KeyboardAvoidingView>>;
export declare const StyledModal: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof Modal>>;
export declare const StyledActivityIndicator: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").ActivityIndicatorProps, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof ActivityIndicator>>;
export declare const StyledSwitch: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").SwitchProps, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof Switch>>;
export declare const StyledTouchableHighlight: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").TouchableHighlightProps, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof TouchableHighlight>>;
export declare const StyledTouchableWithoutFeedback: import("react").ForwardRefExoticComponent<import("./types").StyledProps<import("react-native").TouchableWithoutFeedbackProps, import("react-native").StyleProp<import("react-native").ViewStyle>, never> & import("react").RefAttributes<typeof TouchableWithoutFeedback>>;
export declare const StyledPressable: import("react").ForwardRefExoticComponent<Omit<import("./types").StyledProps<import("react-native").PressableProps & import("react").RefAttributes<View>, import("react-native").ViewStyle, never>, "ref"> & import("react").RefAttributes<import("react").ForwardRefExoticComponent<import("react-native").PressableProps & import("react").RefAttributes<View>>>>;
export declare const StyledXStack: import("react").ForwardRefExoticComponent<{
    variant?: never;
    children?: import("react").ReactNode;
    style?: import("./types").WithMediaQuery<import("./types").PatchProps<import("react-native").ViewStyle>>;
} & import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
    color?: import("./types").TypedColor;
    shadowColor?: import("./types").TypedColor;
    backgroundColor?: import("./types").TypedColor;
} & {
    [x: `${string}Color`]: import("./types").TypedColor;
} & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
    "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
} & {
    "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
} & import("react").RefAttributes<typeof View>>;
export declare const StyledYStack: import("react").ForwardRefExoticComponent<{
    variant?: never;
    children?: import("react").ReactNode;
    style?: import("./types").WithMediaQuery<import("./types").PatchProps<import("react-native").ViewStyle>>;
} & import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
    color?: import("./types").TypedColor;
    shadowColor?: import("./types").TypedColor;
    backgroundColor?: import("./types").TypedColor;
} & {
    [x: `${string}Color`]: import("./types").TypedColor;
} & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
    "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
    "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & {
        "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    };
} & {
    "@xxs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xs"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@sm"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@md"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@lg"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
    "@xxl"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
        color?: import("./types").TypedColor;
        shadowColor?: import("./types").TypedColor;
        backgroundColor?: import("./types").TypedColor;
    } & {
        [x: `${string}Color`]: import("./types").TypedColor;
    } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & {
        "@ios"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@android"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@windows"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@macos"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@web"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@light"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
        "@dark"?: import("./types").PatchType<import("react-native").ViewProps & import("react-native").ViewStyle, import("./types").TypographyProps & import("./types").SpacingProps & {
            color?: import("./types").TypedColor;
            shadowColor?: import("./types").TypedColor;
            backgroundColor?: import("./types").TypedColor;
        } & {
            [x: `${string}Color`]: import("./types").TypedColor;
        } & import("./types").BorderProps> & import("./types").LayoutProps & import("./types").ShortcutProps & any & any;
    } & any;
} & import("react").RefAttributes<typeof View>>;
