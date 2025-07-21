import {
  fontFamily,
  fontWeight,
  fontSizeStyle,
  Background,
} from "../../theme/layout";
import type { TextProps } from "./types";
export const PageTitle = (props: TextProps) => {
  return {
    fontWeight: fontWeight.xlg,
    fontSize: fontSizeStyle.title,
  };
};

export const SectionTitle = (props: TextProps) => {
  return {
    fontWeight: fontWeight.lg,
    fontSize: fontSizeStyle.xlg,
  };
};

export const SubSection = (props: TextProps) => {
  return {
    fontWeight: fontWeight.md,
    fontSize: fontSizeStyle.lg,
  };
};

export const description = (props: TextProps) => {
  return {
    fontWeight: fontWeight.sm,
    fontSize: fontSizeStyle.md,
  };
};

export const getVariantStyle = (props: TextProps): React.CSSProperties => {
  let baseStyle: React.CSSProperties;
  switch (props.typography) {
    case "PageTitle":
      baseStyle = PageTitle(props);
      break;
    case "SectionTitle":
      baseStyle = SectionTitle(props);
      break;
    case "SubSection":
      baseStyle = SubSection(props);
      break;
    case "description":
      baseStyle = description(props);
      break;
    default:
      baseStyle = description(props); // fallback
      break;
  }
  const gradientStyle: React.CSSProperties = props.linearGradient
    ? {
        background: Background.text,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {};

  return {
    ...baseStyle,
    ...gradientStyle,
    fontFamily: fontFamily.default,
    color: "white",
    lineHeight: "normal",
    letterSpacing: "-0.03em",
    display: props.display ?? "block", // fallback if nothing is passed
  };
};
