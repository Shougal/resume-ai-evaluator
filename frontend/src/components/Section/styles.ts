import type { SectionProps } from "./types";
import { gapStyle, paddingStyle } from "../../theme/layout";
import { margin, borderRadiusStyle, Background } from "../../theme/layout";

export const sectionStyle = ({
  displayDirection = "column",
  marginBottom = "sm",
  marginTop = "xs",
  background,
  borderRadius,
}: Pick<
  SectionProps,
  | "displayDirection"
  | "marginBottom"
  | "marginTop"
  | "background"
  | "borderRadius"
>): React.CSSProperties => ({
  display: "flex",
  flexDirection: displayDirection,
  flexWrap: "wrap",
  maxWidth: "100%",
  gap: gapStyle.md,
  padding: paddingStyle.sm,
  marginBottom: margin[marginBottom],
  marginTop: margin[marginTop],
  alignItems: displayDirection == "row" ? "flex-start" : "center",
  ...(background ? { background: Background[background] } : {}),
  ...(borderRadius ? { borderRadius: borderRadiusStyle[borderRadius] } : {}),
});
