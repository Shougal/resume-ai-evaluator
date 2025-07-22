import type { TextProps } from "../Text/types";

export type Display = "row" | "column";
export interface SectionProps {
  children: React.ReactNode;
  title?: TextProps;
  displayDirection?: Display;
}
