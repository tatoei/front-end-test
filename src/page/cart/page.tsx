import { AppNavbar } from "../../components/app-navbar";
import { Button } from "../../components/ui/button";
import { CartItem as CartItemComponent } from "../../components/cart/cart-item";
import { CartSummary } from "../../components/cart/cart-summaryl";
import type { CartItem } from "../../../types";
import { Meh } from "lucide-react";

interface CartPageProps {
  cart: CartItem[];
  onIncrease: (productId: number) => void;
  onDecrease: (productId: number) => void;
  onRemove: (productId: number) => void;
}

export function CartPage({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
}: CartPageProps) {
  // คำนวณยอดรวม
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar cartItemCount={totalItems} />

      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">ตะกร้าสินค้า</h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <Meh className="w-16 h-16 mx-auto mb-4 text-slate-400" />
            <h2 className="text-xl font-medium mb-4">ตะกร้าสินค้าว่าง</h2>
            <a href="/">
              <Button variant={"primary"}>เลือกซื้อสินค้า</Button>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              {cart.map((item) => (
                <CartItemComponent
                  key={item.product.id}
                  item={item}
                  onIncrease={() => onIncrease(item.product.id)}
                  onDecrease={() => onDecrease(item.product.id)}
                  onRemove={() => onRemove(item.product.id)}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <CartSummary
                totalItems={totalItems}
                totalPrice={totalPrice}
                onCheckout={() => alert("ดำเนินการชำระเงิน")}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
