import { render, screen, fireEvent } from "../../test-utils";
import { CartItem } from "./cart-item";
import type { CartItem as CartItemType } from "../../../types";

describe("CartItem", () => {
  const mockItem: CartItemType = {
    product: {
      id: 1,
      name: "Test Product",
      price: 100,
      image: "test-image.jpg",
      description: "Test Description",
    },
    quantity: 2,
  };

  const mockHandlers = {
    onIncrease: jest.fn(),
    onDecrease: jest.fn(),
    onRemove: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders cart item information correctly", () => {
    render(<CartItem item={mockItem} {...mockHandlers} />);

    expect(screen.getByText(mockItem.product.name)).toBeInTheDocument();
    expect(
      screen.getByText(`฿${mockItem.product.price.toLocaleString()}`)
    ).toBeVisible();
    expect(screen.getByText(mockItem.quantity.toString())).toBeVisible();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      mockItem.product.image
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      mockItem.product.name
    );
  });

  it("calls onIncrease when increase button is clicked", () => {
    render(<CartItem item={mockItem} {...mockHandlers} />);

    const increaseButton = screen.getByRole("button", { name: /increase/i });
    fireEvent.click(increaseButton);

    expect(mockHandlers.onIncrease).toHaveBeenCalledTimes(1);
  });

  it("calls onDecrease when decrease button is clicked", () => {
    render(<CartItem item={mockItem} {...mockHandlers} />);

    const decreaseButton = screen.getByRole("button", { name: /decrease/i });
    fireEvent.click(decreaseButton);

    expect(mockHandlers.onDecrease).toHaveBeenCalledTimes(1);
  });

  it("calls onRemove when remove button is clicked", () => {
    render(<CartItem item={mockItem} {...mockHandlers} />);

    const removeButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);

    expect(mockHandlers.onRemove).toHaveBeenCalledTimes(1);
  });

  it("shows placeholder image when image is not provided", () => {
    const itemWithoutImage = {
      ...mockItem,
      product: {
        ...mockItem.product,
        image: undefined,
      },
    };

    render(<CartItem item={itemWithoutImage} {...mockHandlers} />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://via.placeholder.com/100"
    );
  });

  it("displays total price correctly", () => {
    render(<CartItem item={mockItem} {...mockHandlers} />);

    const totalPrice = mockItem.product.price * mockItem.quantity;
    expect(
      screen.getByText(`฿${totalPrice.toLocaleString()}`)
    ).toBeInTheDocument();
  });
});
