import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test('renders filter input and dropdown', () => {
  const mockOnSearchChange = jest.fn();
  const mockOnCategoryChange = jest.fn();
  const items = ["Lettuce", "Yogurt", "Swiss Cheese"];

  render(
    <Filter 
      search="" 
      onSearchChange={mockOnSearchChange} 
      onCategoryChange={mockOnCategoryChange} 
      items={items} 
    />
  );

  // Check if input and dropdown exist
  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
  expect(screen.getByText("Filter by category")).toBeInTheDocument();
});