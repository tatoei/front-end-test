import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem, CartItemProps } from "../../../types";

export function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex items-start gap-4 py-4 border-b">
      <div className="w-20 h-20 rounded-md overflow-hidden">
        <img
          src={item.product.image || "https://via.placeholder.com/100"}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-medium">{item.product.name}</h3>
        <p className="text-gray-600">฿{item.product.price.toLocaleString()}</p>

        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onDecrease}
            className="h-8 w-8"
          >
            <Minus className="h-3 w-3" />
          </Button>

          <span className="w-8 text-center">{item.quantity}</span>

          <Button
            variant="outline"
            size="icon"
            onClick={onIncrease}
            className="h-8 w-8"
          >
            <Plus className="h-3 w-3" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onRemove}
            className="h-8 w-8 text-rose-500 hover:text-rose-600"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="font-semibold">
        ฿{(item.product.price * item.quantity).toLocaleString()}
      </div>
    </div>
  );
}
