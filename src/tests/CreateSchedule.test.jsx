import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CreateSchedule from "../components/CreateSchedule";

describe("CreateSchedule", () => {
  it("Should have all the week days in the component", () => {
    render(<CreateSchedule />);

    expect(screen.getByText(/Segunda/i)).toBeDefined();
    expect(screen.getByText(/Terça/i)).toBeDefined();
    expect(screen.getByText(/Quarta/i)).toBeDefined();
    expect(screen.getByText(/Quinta/i)).toBeDefined();
    expect(screen.getByText(/Sexta/i)).toBeDefined();
  });
});
