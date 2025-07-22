import React from "react";
import { isValidElement } from "react";

import type { SectionProps } from "./types";
import { sectionStyle } from "./styles";
import { Text } from "../Text";

export const Section = ({
  title,
  children,
  displayDirection,
  marginBottom = "sm",
  marginTop = "xs",
  background,
  borderRadius,
}: SectionProps) => {
  const style = sectionStyle({
    displayDirection,
    marginBottom,
    marginTop,
    borderRadius,
    background,
  });

  return (
    <div>
      {title && <Text {...title}>{title.children}</Text>}
      {/* flex box with items */}
      <div style={style}>
        {React.Children.map(children, (child) =>
          isValidElement(child) ? (
            <div
              style={{
                flex: 1,
                flexShrink: 1,
              }}
            >
              {child}
            </div>
          ) : (
            child
          )
        )}
      </div>
    </div>
  );
};
