import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Text } from "..";

import {
  fontWeight,
  fontSizeStyle,
  Background,
  fontFamily,
} from "../../../theme/layout";
import type { Typography, DisplayType } from "../types";

const testCases: {
  typography: Typography;
  expectedWeight: number;
  expectedSize: string;
}[] = [
  {
    typography: "PageTitle",
    expectedWeight: fontWeight.xlg,
    expectedSize: fontSizeStyle.title,
  },
  {
    typography: "SectionTitle",
    expectedWeight: fontWeight.lg,
    expectedSize: fontSizeStyle.xlg,
  },
  {
    typography: "SubSection",
    expectedWeight: fontWeight.md,
    expectedSize: fontSizeStyle.lg,
  },
  {
    typography: "description",
    expectedWeight: fontWeight.sm,
    expectedSize: fontSizeStyle.md,
  },
];

describe("Text component", () => {
  it.each(testCases)(
    "applies correct styles for typography: %s",
    ({ typography, expectedWeight, expectedSize }) => {
      render(<Text typography={typography}>Hello</Text>);
      const el = screen.getByText("Hello");
      expect(el).toHaveStyle(`font-weight: ${expectedWeight}`);
      expect(el).toHaveStyle(`font-size: ${expectedSize}`);
      expect(el).toHaveStyle(`font-family: ${fontFamily.default}`);
    }
  );

  it("applies linear gradient styles when linearGradient is true", () => {
    render(
      <Text typography="PageTitle" linearGradient>
        Gradient Text
      </Text>
    );
    const el = screen.getByText("Gradient Text");
    expect(el).toHaveStyle(`background: ${Background.text}`);
    expect(el).toHaveStyle("WebkitTextFillColor: transparent");
  });

  it("uses display: block by default", () => {
    render(<Text typography="PageTitle">Block Display</Text>);
    const el = screen.getByText("Block Display");
    expect(el).toHaveStyle("display: block");
  });

  it.each<DisplayType>(["inline", "block"])(
    "respects display override: %s",
    (display) => {
      render(
        <Text typography="PageTitle" display={display}>
          Custom Display
        </Text>
      );
      const el = screen.getByText("Custom Display");
      expect(el).toHaveStyle(`display: ${display}`);
    }
  );

  it("falls back to description style when unknown typography is passed", () => {
    render(
      <Text typography={"unknown" as unknown as Typography}>Fallback Text</Text>
    );
    const el = screen.getByText("Fallback Text");
    expect(el).toHaveStyle(`font-size: ${fontSizeStyle.md}`);
    expect(el).toHaveStyle(`font-weight: ${fontWeight.sm}`);
  });

  it("renders nested gradient inline text correctly", () => {
    render(
      <Text typography="PageTitle">
        Outer{" "}
        <Text typography="PageTitle" linearGradient display="inline">
          Inner
        </Text>
      </Text>
    );
    const outer = screen.getByText("Outer");
    const inner = screen.getByText("Inner");
    expect(inner).toHaveStyle("display: inline");
    expect(inner).toHaveStyle(`background: ${Background.text}`);
    expect(outer).toBeInTheDocument();
  });
});
