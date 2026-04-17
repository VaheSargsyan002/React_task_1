import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders the dashboard heading and description", () => {
    render(<Header />);

    expect(screen.getByText("Profile Snapshot")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Mini Profile Dashboard" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A polished view of the member profile with a fresh quote pulled live.",
      ),
    ).toBeInTheDocument();
  });
});
