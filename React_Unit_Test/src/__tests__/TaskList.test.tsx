import { fireEvent, render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";

describe("TaskList", () => {
  it("renders the initial tasks and progress", () => {
    render(<TaskList />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Today's Tasks" }),
    ).toBeInTheDocument();
    expect(screen.getByText("1/3 done")).toBeInTheDocument();
    expect(screen.getByLabelText("Review profile details")).toBeChecked();
    expect(screen.getByLabelText("Save favorite quote")).not.toBeChecked();
    expect(
      screen.getByLabelText("Finish React practice session"),
    ).not.toBeChecked();
  });

  it("toggles tasks and updates the progress count", () => {
    render(<TaskList />);

    const saveQuoteTask = screen.getByLabelText("Save favorite quote");
    const reviewTask = screen.getByLabelText("Review profile details");

    fireEvent.click(saveQuoteTask);
    expect(saveQuoteTask).toBeChecked();
    expect(screen.getByText("2/3 done")).toBeInTheDocument();

    fireEvent.click(reviewTask);
    expect(reviewTask).not.toBeChecked();
    expect(screen.getByText("1/3 done")).toBeInTheDocument();
  });
});
