import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
  onCheckout: () => void;
}

export function CartSummary({
  totalItems,
  totalPrice,
  onCheckout,
}: CartSummaryProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">สรุปรายการ</h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>จำนวนสินค้า</span>
          <span>{totalItems} ชิ้น</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>รวมทั้งหมด</span>
          <span>฿{totalPrice.toLocaleString()}</span>
        </div>

        <Button
          onClick={onCheckout}
          className="w-full  mt-4"
          variant={"primary"}
          disabled={totalItems === 0}
          icon={<ShoppingCart />}
        >
          ดำเนินการชำระเงิน
        </Button>
      </div>
    </div>
  );
}
