<img src="xspectrum.png" alt="xspectrum" width="300"/>

**_xspectrum-styled_** is an style library for Modern React.

Generate a styled component with media queries with a easy to use schema and type definition.

## Key features

- **Media Queries**: Encourages developers to easily write responsive components by default.
- **Color Reshade**: Create variations of your colors in realtime or build time.
- **Faster Iteration**: Thanks to his composable nature, its easy to change colors while keeping lumen at fine control, allowing for faster rebranding among others solutions.
- **CSS-in-JSX Prop Generation**: Automatically generate CSS props for your components for inline styling without having to use the style prop directly.

## Installation

To install this library, you can run any of the following commands (only one):

We highly recommend using yarn.

```sh
yarn add xspectrum-styled
```

But you can still still though npm.

```sh
npm install xspectrum-styled
```

## Quick Start

The "createStyled" function will return a wrapper around your component that apply the given style and subscribe it to changes to your device, like color scheme, or device width automatically, to apply any queries you provide to the style.

In this first example, we also transform the color indigo to a subvariation of him with luminosity/darkness of 800.

```jsx
export const Card = createStyled(View, {
  backgroundColor: "indigo.800",
  padding: "md",
  margin: 10,
  size: "4md",
});

export default function Page(props) {
  return <Card>...</Card>;
}
```

Also notice "4md", that in this case, will perform 4 times the medium value. You can then try to use any of this ones:

us: ultra small
xs: extra small
sm: small
md: medium
lg: long
xl: extra large

---

In this next example, we create a Button with variants.

```jsx
export const Button = createStyled(Pressable, {
  backgroundColor: "indigo.700",
  height: 'xl',
  '@': 'xl': {

  }
});

export default function Page(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Button onPress={onPress}>
      <Text>{title}</Text>
    </Button>
  );
}
```

Also notice "4md", that in this case, will perform 4 times the medium value. You can then try to use any of this ones:

us: ultra small
xs: extra small
sm: small
md: medium
lg: long
xl: extra large
