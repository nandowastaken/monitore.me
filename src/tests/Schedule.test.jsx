import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Schedule from "../components/Schedule";

describe("Schedule shows hours accordingly to shift", () => {
  it("Should show all the hours accordingly to the morning shift", () => {
    render(<Schedule visibleHeader="true" shift="matutino" />);

    expect(screen.getByText(/7:00/i)).toBeDefined();
    expect(screen.getByText(/8:00/i)).toBeDefined();
    expect(screen.getByText(/9:00/i)).toBeDefined();
    expect(screen.getByText(/10:00/i)).toBeDefined();
    expect(screen.getByText(/11:00/i)).toBeDefined();
    expect(screen.getByText(/12:00/i)).toBeDefined();
  });

  it("Should show all the hours accordingly to the afternoon shift", () => {
    render(<Schedule visibleHeader="true" shift="vespertino" />);

    expect(screen.getByText(/13:00/i)).toBeDefined();
    expect(screen.getByText(/14:00/i)).toBeDefined();
    expect(screen.getByText(/15:00/i)).toBeDefined();
    expect(screen.getByText(/16:00/i)).toBeDefined();
    expect(screen.getByText(/17:00/i)).toBeDefined();
    expect(screen.getByText(/18:00/i)).toBeDefined();
  });
});
