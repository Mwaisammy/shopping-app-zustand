"use client";
import { cartProduct, useCartStore } from "@/store/cart-store";
// import { usePurchaseStore } from "@/store/purchase-store";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type Props = {
  product: cartProduct;
};

function CartProducts({ product }: Props) {
  const {
    removeCartItem,
    cartItems,
    increaseQuantity,
    addCartItem,
    decreaseQuantity,
  } = useCartStore();

  const addPurchase = () => {
    increaseQuantity(product.id);
  };

  const removePurchase = () => {
    decreaseQuantity(product.id);
  };

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
            width={100}
            height={100}
            className="object-contain"
          />

          <h3 className="text-sm font-medium text-slate-500 ">
            {`$ ${product.price}`}
          </h3>
        </div>
        <div className="">{product.title}</div>
        <div className=" flex items-center justify-between">
          <Button
            className="bg-orange-500 hover:bg-orange-600 transition-all ease-in-out duration-300 font-semibold tracking-wide"
            onClick={onRemoveCartItem}
          >
            Remove item
          </Button>
          <div className="flex items-center space-x-3">
            <>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white "
                onClick={removePurchase}
                disabled={product.quantity === 1}
              >
                -
              </Button>
              <h2>{product.quantity}</h2>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white "
                onClick={addPurchase}
              >
                +
              </Button>
            </>
          </div>

          {/* <Button onClick={onOpen}>Buy item</Button> */}
        </div>
      </Card>
    </>
  );
}

export default CartProducts;
