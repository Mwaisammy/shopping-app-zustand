"use client";
import CartProducts from "@/components/cart-products";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function CartPage() {
  const { cartItems } = useCartStore();

  if (cartItems && cartItems.length === 0) {
    return (
      <div className="flex flex-col space-y-4 items-center justify-center h-screen">
        <div className="flex items-center space-x-4">
          <Image
            src={"/empty-cart.png"}
            alt="cart-empty"
            height={100}
            width={100}
            className="size-30"
          />
          <h2 className="font-semibold text-lg tracking-wider">
            Cart is empty
          </h2>
        </div>

        <Button asChild>
          <Link href={"/"}>Home</Link>
        </Button>
      </div>
    );
  }
  return (
    <div className="grid  sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
      {cartItems.map((cartItem) => (
        <CartProducts key={cartItem.id} product={cartItem} />
      ))}
    </div>
  );
}

export default CartPage;
