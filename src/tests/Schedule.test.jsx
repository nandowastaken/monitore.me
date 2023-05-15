import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Schedule from "../components/Schedule";

describe("Schedule shows hours accordingly to shift", () => {
  test("Should show 13:00 hour", () => {
    render(<Schedule visibleHeader="true" shift="vespertino" />);

    expect(screen.getByText(/13:00/i)).toBeDefined();
  });

  test("Should show 14:00 hour", () => {
    render(<Schedule visibleHeader="true" shift="vespertino" />);

    expect(screen.getByText(/14:00/i)).toBeDefined();
  });

  test("Should show 15:00 hour", () => {
    render(<Schedule visibleHeader="true" shift="vespertino" />);

    expect(screen.getByText(/15:00/i)).toBeDefined();
  });

  test("Should show 16:00 hour", () => {
    render(<Schedule visibleHeader="true" shift="vespertino" />);

    expect(screen.getByText(/16:00/i)).toBeDefined();
  });

  test("Should show 17:00 hour", () => {
    render(<Schedule visibleHeader="true" shift="vespertino" />);

    expect(screen.getByText(/17:00/i)).toBeDefined();
  });

  test("Should show 18:00 hour", () => {
    render(<Schedule visibleHeader="true" shift="vespertino" />);

    expect(screen.getByText(/18:00/i)).toBeDefined();
  });
});
