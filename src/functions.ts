/*
export const _createStyled = (Component: React.ComponentType<any>, schema: LegacyStyledComponentSchema) => {
  //const {} = useTheme();

  return ({ variant, children, ...rest }: StyledComponentProps<{}, {}, any>) => {
    const { props, style } = spreadProps({
      props: rest,
      propagatesEvents: schema.propagatesEvents,
    });

    const baseStyle = compileProps(schema.style, schema.theme);
    const variantStyle = compileProps(schema.variants[variant || "base"] || {}, schema.theme);

    return <Component style={{ ...baseStyle, ...variantStyle }}>{children}</Component>;
  };
};
*/
