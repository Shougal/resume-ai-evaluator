import type { TextProps } from "./types";
import { getVariantStyle } from "./styles";

export const Text = ({
  children,
  typography,
  linearGradient,
  display = "block",
  ...rest
}: TextProps) => {
  const styleProps: TextProps = {
    children,
    typography,
    linearGradient,
    display,
    ...rest,
  };
  const style = getVariantStyle(styleProps);
  return <div style={style}>{children}</div>;
};
