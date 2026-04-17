import { fireEvent, render, screen } from "@testing-library/react";
import PreferenceChecklist from "../components/PreferenceChecklist";

describe("PreferenceChecklist", () => {
  it("renders the initial action queue", () => {
    render(<PreferenceChecklist />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Action Queue" }),
    ).toBeInTheDocument();
    expect(screen.getByText("1/3 done")).toBeInTheDocument();
    expect(screen.getByText("Draft intro message")).toBeInTheDocument();
    expect(screen.getByText("Review quote card copy")).toBeInTheDocument();
    expect(screen.getByText("Share dashboard update")).toBeInTheDocument();
  });

  it("updates step status and summary through button actions", () => {
    render(<PreferenceChecklist />);

    const markDoneButtons = screen.getAllByRole("button", { name: "Mark done" });
    const markPendingButton = screen.getByRole("button", { name: "Mark pending" });

    fireEvent.click(markDoneButtons[0]);
    expect(screen.getByText("2/3 done")).toBeInTheDocument();

    fireEvent.click(markPendingButton);
    expect(screen.getByText("1/3 done")).toBeInTheDocument();
  });
});
