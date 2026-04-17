import { render, screen } from "@testing-library/react";
import useSWR from "swr";
import QuoteBox from "../components/QuoteBox";

jest.mock("swr", () => jest.fn());

const mockedUseSWR = useSWR as jest.MockedFunction<typeof useSWR>;

describe("QuoteBox", () => {
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

    render(<QuoteBox />);

    expect(screen.getByText("Loading quote...")).toBeInTheDocument();
  });

  it("renders the error state", () => {
    mockedUseSWR.mockReturnValue({
      data: undefined,
      error: new Error("Request failed"),
      isLoading: false,
      isValidating: false,
      mutate: jest.fn(),
    } as ReturnType<typeof useSWR>);

    render(<QuoteBox />);

    expect(screen.getByText("Could not load quote.")).toBeInTheDocument();
  });

  it("renders the fetched quote", () => {
    mockedUseSWR.mockReturnValue({
      data: { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
      error: undefined,
      isLoading: false,
      isValidating: false,
      mutate: jest.fn(),
    } as ReturnType<typeof useSWR>);

    render(<QuoteBox />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Daily Quote" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Stay hungry, stay foolish."),
    ).toBeInTheDocument();
    expect(screen.getByText("Steve Jobs")).toBeInTheDocument();
  });
});
