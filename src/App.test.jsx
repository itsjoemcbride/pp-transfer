import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("updates the balance when we enter some valid input and we click submit", () => {
  render(<App />);

  const balance = screen.getByLabelText(/balance/i);
  const input = screen.getByLabelText(/amount/i);
  const submitBtn = screen.getByRole("button");

  userEvent.type(input, "20");
  userEvent.click(submitBtn);

  expect(balance.textContent).toBe("£80");
});

it("updates provides a message when we enter some invalid input and we click submit", () => {
  render(<App />);

  const balance = screen.getByLabelText(/balance/i);
  const input = screen.getByLabelText(/amount/i);
  const submitBtn = screen.getByRole("button");
  const msg = screen.getByLabelText(/message/i);

  userEvent.type(input, "cats");
  userEvent.click(submitBtn);

  expect(balance.textContent).toContain("100");
  expect(msg.textContent).toContain("Insufficient balance");
});
