<img src="docs/logo.png" alt="logo" width="300">

**xp.js** is a framework for modern cross-platform React applications.

**xp.js-styled** is an individual single package from that framework.

The goal of this package is to build enterprise scalalable styled components with an easy-to-use minimal schema definition.

# Key Features

- **CSS-in-JSX**: Automatically generate CSS-in-JSX props for your components, making easy to style inline them without having to use the style prop directly.
- **Media Queries**: Encourages devs to easily code responsive components by default, with a plain simple media queries API.
- **Deep Schema:** All schemas can hold more schemas recursively, allowing to consider specific cases faster when using queries.
- **Color Shading**: Create reshades of your colors with a simple lumen range syntax.
- **Variants Support:** Included support for variants in the component schema.

# Quick Start

The following guide will teach you how to get this working in your project rather fast!

## CSS-in-JSX

The `createStyledComponent` function returns a optimized high order wrapper around your component that applies the given style schema.
Then the styled component subscribes the schema media queries to their specific device change listener, to optimally perform a style update.

This includes variants, prop changes and device changes.

For now, let's start creating a simple Styled View.

```jsx
export const StyledView = createStyledComponent(View);
```

`StyledView` now can be inline styled. Notice we pass backgroundColor, fontSize and fontWeight as plain props, and not as part of the `style` prop.

```jsx
export default function Page() {
  return (
    <StyledView backgroundColor="nature.900" fontSize={18} fontWeight="bold">
      ...
    </StyledView>
  );
}
```

## Media Queries

Exploring further into, of course you can create your styled components with a base style, using a schema
that will be applied as the "global style" for that component, but with the option to iterate the styles using inline props.

For example, we conditionally apply a style override when the device is "medium-size".
All devices that meet the query condition will apply the style.

```jsx
export const StyledView = createStyledComponent(View, {
  backgroundColor: "blueViolet.800",
  padding: 20,
  "@md": {
    backgroundColor: "blueViolet.700",
    padding: 25,
  },
});
```

For more details regarding the media queries included, the following tables contains the full list:

| Color Scheme Query | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| @light             | Targets devices or user settings that prefer a light color scheme. |
| @dark              | Targets devices or user settings that prefer a dark color scheme.  |

---

| Platform Query | Description                                                                               |
| -------------- | ----------------------------------------------------------------------------------------- |
| @ios           | Targets devices running the iOS operating system, such as iPhones and iPads.              |
| @android       | Targets devices running the Android operating system, such as Android phones and tablets. |
| @macos         | Targets devices running the macOS operating system, such as MacBooks and iMacs.           |
| @windows       | Targets devices running the Windows operating system, such as PCs and laptops.            |
| @web           | Targets web-based platforms and browsers.                                                 |

---

| Size Query | Description                                                                             |
| ---------- | --------------------------------------------------------------------------------------- |
| @xxs       | Targets devices with very extra small screens, typically less than 360px in width.      |
| @xs        | Targets devices with extra small screens, typically between 360px and 576px in width.   |
| @sm        | Targets devices with small screens, typically between 576px and 768px in width.         |
| @md        | Targets devices with medium screens, typically between 768px and 992px in width.        |
| @lg        | Targets devices with large screens, typically between 992px and 1200px in width.        |
| @xl        | Targets devices with extra large screens, typically between 1200px and 1600px in width. |
| @xxl       | Targets devices with very extra large screens, typically greater than 1600px in width.  |

## Deep Nesting

When developing a style schema, you can implement any required media queries. However, for more precise control, especially when multiple conditions are involved, it's necessary to deep-nest your queries appropriately. This ensures styles are applied based on multiple conditions.

For example, in this code, the background color is "gray.500", but only is the device is larger, then we check if the device is an Android device, in which case the background color should be "blue.300." If the previous condition was met, but at the same time the color scheme is dark mode, then the background color should be "purple.200.", for iOS devices the sample logic will be used.

```jsx
export const Box = createStyledComponent(View, {
  backgroundColor: "gray.500",
  "@xl": {
    backgroundColor: "yellow.450",
    "@android": {
      backgroundColor: "blue.300",
      "@dark": {
        backgroundColor: "purple.200",
      },
    },
    "@ios": {
      backgroundColor: "green.300",
      "@dark": {
        backgroundColor: "yellow.200",
      },
    },
  },
});
```

## Color System

The package comes with a set of built-in colors, to make easy prototyping

<img src="docs/colors.png" alt="colors" width="250"/>

**List of Built-in Colors**

| Color Name  | Color Key  | Color Value |
| ----------- | ---------- | ----------- |
| Red         | red        | #FF0000     |
| Coral       | coral      | #FF7F50     |
| Orange      | orange     | #FFA500     |
| Gold        | gold       | #FFD700     |
| Yellow      | yellow     | #FFFF00     |
| Lime        | lime       | #BCED0D     |
| Light Green | lightGreen | #78D61A     |
| Green       | green      | #4EBF02     |
| Dark Green  | darkGreen  | #008000     |
| Nature      | nature     | #008040     |
| Teal        | teal       | #008080     |
| Aqua        | aqua       | #009eb0     |
| Sky         | sky        | #00a2cf     |
| Light Blue  | lightBlue  | #007CCF     |
| Blue        | blue       | #0057E3     |
| Dark Blue   | darkBlue   | #002AE3     |
| Blue Violet | blueViolet | #3900E3     |
| Violet      | violet     | #5A0EE8     |
| Indigo      | indigo     | #6D04D6     |
| Purple      | purple     | #8500C7     |
| Magenta     | magenta    | #A404BD     |
| Pink        | pink       | #BD04B7     |
| Hot Pink    | hotPink    | #BD0461     |
| Black       | black      | #000000     |
| Gray        | gray       | #808080     |
| White       | white      | #FFFFFF     |

## Theme Styling (legacy)

Now, in case you need to share styles across multiple styled components, even with their responsiveness, then you can use a theme,
and import the styles using the `parentStyle` prop.

```jsx
export const Theme = createTheme({
  styles: {
    container: {
      padding: 5,
      margin: 5,
      "@md": {
        margin: 5,
        padding: 5,
      },
    },
    center: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

export const Card = createStyledComponent(View, {
  theme: Theme,
  parentStyles: ["container", "center"],
});

export const Banner = createStyledComponent(View, {
  theme: Theme,
  backgroundColor: "yellow.400",
  parentStyles: ["container"],
});
```

## Breakpoints

Define consistent spacing and sizing across your application using the built-in breakpoint system.

We provide for you common default to maintain a consistent and responsive design on your application, however you can customize those values in a theme. (see `createTheme` hook)

**The default breakpoints that change to device sizes and viewport are:**

| Breakpoint | Width   |
| ---------- | ------- |
| xxs        | >0px    |
| xs         | >360px  |
| sm         | >576px  |
| md         | >768px  |
| lg         | >992px  |
| xl         | >1200px |
| xxl        | >1600px |

## Installation

Here you can copy/paste to install from usual package managers.

```sh
yarn add xp.js-state
```

```sh
npm install xp.js-state
```

```sh
pnpm add xp.js-state
```

```sh
jspm install npm:xp.js-state
```

# Quick Demo

Here is a full example of how to use most of the package.

```jsx
export const Card = createStyledComponent(View, {
  backgroundColor: "gold.100",
  padding: 20,
  borderRadius: 10,
  shadowColor: "gray.850",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
  margin: 10,
});

export const StyledText = createStyledComponent(Text);

export const StyledPressable = createStyledComponent(Pressable, {
  backgroundColor: "indigo.600",
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
});

export default function Page(props) {
  return (
    <Card>
      <StyledText color="black" fontSize={18} fontWeight="bold">
        Card Title
      </StyledText>
      <StyledText color="black" marginTop={10}>
        This card component demonstrates how to use styled components with a color palette for consistent theming.
      </StyledText>
      <StyledPressable>
        <StyledText color="white.900">OK</StyledText>
      </StyledPressable>
    </Card>
  );
}
```
