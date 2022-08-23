import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

it("calls the submit handler when we click the submit button", () => {
  const handleClick = jest.fn();
  render(<Form handleClick={handleClick} />);
  const submitBtn = screen.getByLabelText(/button/i);

  userEvent.click(submitBtn);
  expect(handleClick).toHaveBeenCalled();
});
