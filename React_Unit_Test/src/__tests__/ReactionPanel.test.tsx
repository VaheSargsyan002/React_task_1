import { fireEvent, render, screen } from "@testing-library/react";
import ReactionPanel from "../components/ReactionPanel";

describe("ReactionPanel", () => {
  it("increments appreciations when the action button is clicked", () => {
    render(<ReactionPanel />);

    const appreciateButton = screen.getByRole("button", {
      name: "Appreciate profile",
    });

    fireEvent.click(appreciateButton);
    fireEvent.click(appreciateButton);

    expect(screen.getByText("Appreciations: 2")).toBeInTheDocument();
  });

  it("toggles the bookmark state", () => {
    render(<ReactionPanel />);

    const bookmarkButton = screen.getByRole("button", {
      name: "Bookmark profile",
    });

    expect(screen.getByText("Saved: No")).toBeInTheDocument();

    fireEvent.click(bookmarkButton);
    expect(screen.getByRole("button", { name: "Remove bookmark" })).toBeInTheDocument();
    expect(screen.getByText("Saved: Yes")).toBeInTheDocument();
  });
});
