import type { Size } from "../../theme/types";

export type Variant = "primary";

export interface ButtonStyleProps {
  variant: Variant;
  size: Size;
  disabled?: boolean;
}
//TODO Enhancement:on Mouse leave, up, and down
export interface ButtonProps extends ButtonStyleProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  accessibilityLabel?: string;
}
