import { fireEvent, render, screen } from "@testing-library/react";
import useSWR from "swr";
import QuickTaskCard from "../components/QuickTaskCard";

jest.mock("swr", () => jest.fn());

const mockedUseSWR = useSWR as jest.MockedFunction<typeof useSWR>;

describe("QuickTaskCard", () => {
  afterEach(() => {
    mockedUseSWR.mockReset();
  });

  it("renders the loading state", () => {
    mockedUseSWR.mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
      isValidating: false,
      mutate: jest.fn(),
    } as ReturnType<typeof useSWR>);

    render(<QuickTaskCard />);

    expect(screen.getByText("Loading a live task...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Refreshing..." })).toBeDisabled();
  });

  it("renders an error message when fetching fails", () => {
    mockedUseSWR.mockReturnValue({
      data: undefined,
      error: new Error("Request failed"),
      isLoading: false,
      isValidating: false,
      mutate: jest.fn(),
    } as ReturnType<typeof useSWR>);

    render(<QuickTaskCard />);

    expect(screen.getByText("Could not load a task.")).toBeInTheDocument();
  });

  it("renders fetched data and refreshes on button click", () => {
    const mutate = jest.fn();

    mockedUseSWR.mockReturnValue({
      data: { todo: "Review the component tests", completed: false },
      error: undefined,
      isLoading: false,
      isValidating: false,
      mutate,
    } as ReturnType<typeof useSWR>);

    render(<QuickTaskCard />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Quick Focus" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Review the component tests")).toBeInTheDocument();
    expect(screen.getByText("Status: Open")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Get another" }));
    expect(mutate).toHaveBeenCalledTimes(1);
  });
});
