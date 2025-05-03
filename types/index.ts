// ประเภทข้อมูลสินค้า
export type Product = {
    id: number;
    name: string;
    price: number;
    image?: string; // URL รูปภาพ (optional)
    description?: string; // คำอธิบาย (optional)
};

// ประเภทรายการในตะกร้า
export type CartItem = {
    product: Product;
    quantity: number;
};

// ประเภท Props ของ Navbar
export type NavbarProps = {
    cartItemCount: number;
};

// ประเภท Props ของ Product Card
export type ProductCardProps = {
    product: Product;
    onAddToCart: (product: Product) => void;
};

// ประเภท Props ของ Cart Item
export type CartItemProps = {
    item: CartItem;
    onIncrease: () => void;
    onDecrease: () => void;
    onRemove: () => void;
};

// ประเภท Props ของ Cart Summary
export type CartSummaryProps = {
    totalItems: number;
    totalPrice: number;
    onCheckout: () => void;
};