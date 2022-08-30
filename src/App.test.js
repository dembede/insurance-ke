import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome text", () => {
  render(<App />);
  const welcomeText = screen.getByText(
    /Buying your motor vehicle insurance should be a breeze!/i
  );
  expect(welcomeText).toBeInTheDocument();
});
