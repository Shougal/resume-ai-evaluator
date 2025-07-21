export type Typography =
  | "PageTitle"
  | "SectionTitle"
  | "SubSection"
  | "description";
export type DisplayType = "inline" | "block";
export interface TextProps {
  children: React.ReactNode;
  typography: Typography;
  linearGradient?: boolean;
  display?: DisplayType;
}
