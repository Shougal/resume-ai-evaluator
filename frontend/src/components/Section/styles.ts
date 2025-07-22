import type { SectionProps } from "./types";
import { gapStyle } from "../../theme/layout";

export const sectionStyle = ({
  displayDirection = "column",
}: Pick<SectionProps, "displayDirection">): React.CSSProperties => ({
  display: "flex",
  flexDirection: displayDirection,
  flexWrap: "wrap",
  maxWidth: "100%",
  gap: gapStyle.sm,
  alignItems: "center",
});
