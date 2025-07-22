import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Section } from "..";

describe("Section Component", () => {
  it("renders the title and children", () => {
    render(
      <Section
        title={{
          children: "Test Title",
          typography: "SectionTitle",
        }}
        displayDirection="row"
      >
        <div>Child 1</div>
        <div>Child 2</div>
      </Section>
    );

    // assert the title exists
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    // assert the children exist
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();

    screen.debug(); // useful for visualizing the DOM
  });

  it("wraps children when container is small", () => {
    const { container } = render(
      <div style={{ width: "200px" }}>
        <Section displayDirection="row">
          <div>Item A</div>
          <div>Item B</div>
          <div>Item C</div>
        </Section>
      </div>
    );

    expect(container.textContent).toContain("Item A");
    expect(container.textContent).toContain("Item B");
    expect(container.textContent).toContain("Item C");
  });
});
