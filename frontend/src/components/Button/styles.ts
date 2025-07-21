import type { ButtonStyleProps } from "./types";
import {
  paddingStyle,
  fontSizeStyle,
  borderRadiusStyle,
  Background,
  height,
} from "../../theme/layout";

const baseStyle = (props: ButtonStyleProps) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: paddingStyle[props.size],
    fontSize: fontSizeStyle[props.size],
    borderRadius: borderRadiusStyle[props.size],
    maxHeight: height.buttonHeight,
    background: Background.primary,
  };
};

// Main function to export
export const getVariantStyle = (
  props: ButtonStyleProps
): React.CSSProperties => {
  switch (props.variant) {
    case "primary":
      return baseStyle(props);
    default:
      return baseStyle(props); // fallback
  }
};
