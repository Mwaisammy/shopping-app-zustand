"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import { toast } from "sonner";

// type Props = {
//   product: Product;
//   size? :number;
// };
type Props = {
  product: Product;
  size?: number;
};

function ProductsPage({ product, size = 100 }: Props) {
  const { addCartItem } = useCartStore();

  const onAddCartItem = () => {
    addCartItem(product);
    toast.success("Product added to cart");
  };
  return (
    <>
      <Card className="p-3 flex flex-col justify-between space-y-4 shadow-sm">
        <div className="flex justify-between items-center  h-full w-full">
          <Image
            src={product.image}
            alt="products"
            width={size}
            height={size}
            className="object-contain"
          />

          <h3 className="text-sm font-medium text-slate-500 ">
            {" "}
            {`$ ${product.price}`}
          </h3>
        </div>
        <div className="">{product.title}</div>
        <div className="">
          <Button
            onClick={onAddCartItem}
            variant={"ghost"}
            className="bg-orange-500 hover:bg-orange-600 text-white transition-all ease-in-out duration-300 font-semibold tracking-wide"
          >
            Add To Cart
          </Button>
        </div>
      </Card>
    </>
  );
}

export default ProductsPage;
