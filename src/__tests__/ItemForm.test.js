import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test('calls onItemFormSubmit with form data when submitted', () => {
  const mockSubmit = jest.fn();
  
  render(<ItemForm onItemFormSubmit={mockSubmit} />);
  
  // Fill the form
  fireEvent.change(screen.getByLabelText(/Name:/i), {
    target: { value: "Apples" }
  });
  fireEvent.change(screen.getByLabelText(/Category:/i), {
    target: { value: "Produce" }
  });

  // Submit the form
  fireEvent.submit(screen.getByRole("form"));

  // Assert the mockSubmit function was called with the correct data
  expect(mockSubmit).toHaveBeenCalledWith({
    name: "Apples",
    category: "Produce"
  });
});