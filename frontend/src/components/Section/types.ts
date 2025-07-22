import type { TextProps } from "../Text/types";
import type { margin, BorderRadiusStyle, Background } from "../../theme/types";

export type Display = "row" | "column";
export interface SectionProps {
  children: React.ReactNode;
  title?: TextProps;
  displayDirection?: Display;
  marginBottom?: margin;
  marginTop?: margin;
  background?: Background;
  borderRadius?: BorderRadiusStyle;
}
