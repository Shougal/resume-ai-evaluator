import {
  paddingStyle,
  fontSizeStyle,
  borderRadiusStyle,
  height,
  gapStyle,
  margin,
  Background,
} from "./layout";

export type PaddingStyle = keyof typeof paddingStyle;
export type FontSizeStyle = keyof typeof fontSizeStyle;
export type BorderRadiusStyle = keyof typeof borderRadiusStyle;
export type Height = keyof typeof height;
export type GapStyle = keyof typeof gapStyle;

export type ButtonSize = "xs" | "sm" | "md"; // Cap at medium
export type margin = keyof typeof margin;
export type Background = keyof typeof Background;
