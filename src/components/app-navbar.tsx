import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface NavbarProps {
  cartItemCount: number;
}

export function AppNavbar({ cartItemCount }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-blue-600">
          ShopEasy
        </a>

        <a href="/cart">
          <Button
            className="relative"
            variant={"primary-outline"}
            icon={<ShoppingCart />}
          >
            ตะกร้าสินค้า
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </a>
      </div>
    </nav>
  );
}
