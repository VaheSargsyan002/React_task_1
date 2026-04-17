import { render, screen } from "@testing-library/react";
import Badge from "../components/Badge";

describe("Badge", () => {
  it("renders the provided label", () => {
    render(<Badge label="Active Member" />);

    expect(screen.getByText("Active Member")).toBeInTheDocument();
  });
});
