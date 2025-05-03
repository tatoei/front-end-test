import { AppNavbar } from "../../components/app-navbar";
import { ProductCard } from "../../components/products/product-card";
import type { Product, CartItem } from "../../../types";

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "เสื้อเชิ้ตสีขาว",
    price: 590,
    image:
      "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/zoom/c039c872477589b8e66408a60ee0e774ae383432_xxl-1.jpg",
    description: "เสื้อเชิ้ตสีขาวเนื้อผ้า cotton 100%",
  },
  {
    id: 2,
    name: "กางเกงยีนส์",
    price: 890,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZrzcFJXoEo9kyg9zr3nXie67Lf5qgSQZxQ&s",
    description: "กางเกงยีนส์สไตล์สลิมฟิต",
  },
  {
    id: 3,
    name: "รองเท้าผ้าใบ",
    price: 1290,
    image:
      "https://continew.co.th/media/catalog/product/cache/c7a2609edde15cd194a9cb9af2917d57/c/o/coifw005-2.jpg",
    description: "รองเท้าผ้าใบสวมใส่สบาย",
  },
];

export function HomePage({
  cart,
  onAddToCart,
}: {
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <main className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-8">สินค้าทั้งหมด</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
