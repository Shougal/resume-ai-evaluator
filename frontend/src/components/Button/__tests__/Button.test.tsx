import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "..";

describe("Button should be rendered", () => {
  it("renders the button component", () => {
    render(
      <Button
        size="md"
        variant="primary"
        onClick={() => console.log("clicked")}
      >
        hey there render
      </Button>
    );
    screen.debug();
  });
});

describe("form must be submitted upon button click of type submit", () => {
  it("renders form", () => {
    const handleSubmit = vi.fn((e) => {
      e.preventDefault();
      console.log("submitted form");
    });
    const { getByRole } = render(
      <form onSubmit={handleSubmit}>
        <Button size="sm" variant="primary" onClick={handleSubmit}>
          {" "}
          hey there form
        </Button>
      </form>
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
