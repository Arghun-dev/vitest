import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("increments count when button is clicked", () => {
    render(<App />);
    const button = screen.getByText(/count is/i);
    fireEvent.click(button);
    expect(screen.getByText("count is 1")).toBeInTheDocument();
  });
});
