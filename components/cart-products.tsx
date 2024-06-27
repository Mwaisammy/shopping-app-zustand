import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { cartProduct, useCartStore } from "@/store/cart-store";
import { Button } from "./ui/button";
import { toast } from "sonner";

type Props = {
  size?: number;
  product: cartProduct;
  productId: number;
};

function CartProducts({ size = 100, product }: Props) {
  const { removeCartItem } = useCartStore();

  function onRemoveCartItem() {
    removeCartItem(product.id);
    toast.success(`Product ${product.id} removed`);
  }
  return (
    <>
      <Card className="p-3 flex flex-col justify-between space-y-4 shadow-sm">
        <div className="flex justify-between items-center h-full w-full">
          <Image
            src={product.image}
            alt="products"
            width={size}
            height={size}
            className="object-contain"
          />

          <h3 className="text-sm font-medium text-slate-500 ">
            {`$ ${product.price}`}
          </h3>
        </div>
        <div className="">{product.title}</div>
        <div className="">
          <Button
            variant={"ghost"}
            className="bg-orange-500 hover:bg-orange-600 text-white transition-all ease-in-out duration-300 font-semibold tracking-wide"
            onClick={onRemoveCartItem}
          >
            Remove item
          </Button>
        </div>
      </Card>
    </>
  );
}

export default CartProducts;
