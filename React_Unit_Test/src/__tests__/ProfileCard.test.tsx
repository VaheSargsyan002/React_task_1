import { render, screen } from "@testing-library/react";
import ProfileCard from "../components/ProfileCard";

describe("ProfileCard", () => {
  it("renders the formatted name, role, and badge", () => {
    render(
      <ProfileCard firstName="Vahe" lastName="Sargsyan" role="student" />,
    );

    expect(screen.getByText("Member")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Vahe Sargsyan" }),
    ).toBeInTheDocument();
    expect(screen.getByText("STUDENT")).toBeInTheDocument();
    expect(screen.getByText("Active Member")).toBeInTheDocument();
  });
});
