import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import type { ProductCardProps } from "../../../types";

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-4">
        <img
          src={product.image || ""}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 line-clamp-2 mt-2">
          {product.description || "ไม่มีคำอธิบาย"}
        </p>
        <p className="text-rose-600 font-bold mt-2">
          ฿{product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          variant={"primary"}
          className="w-full "
        >
          เพิ่มลงตะกร้า
        </Button>
      </CardFooter>
    </Card>
  );
}
