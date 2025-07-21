import { motion } from "motion/react";

import type { ButtonProps, ButtonStyleProps } from "./types";
import { getVariantStyle } from "./styles";
export const Button = ({
  size = "md",
  variant,
  disabled,
  onClick,
  children,
  accessibilityLabel,
  ...rest
}: ButtonProps) => {
  const styleProps: ButtonStyleProps = { variant, size, disabled };
  const style = getVariantStyle(styleProps);

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      aria-label={accessibilityLabel}
      style={style}
      disabled={disabled}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
