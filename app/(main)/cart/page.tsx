"use client";
import CheckoutComponent from "@/app/components/checkout-component";
import CartProducts from "@/components/cart-products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import Link from "next/link";

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
    <main className="flex flex-col md:flex-row gap-5">
      <div className="space-y-4 w-full">
        {cartItems.map((cartItem) => (
          <CartProducts key={cartItem.id} product={cartItem} />
        ))}
      </div>

      {/* <Separator className="my-4" /> */}

      <div className="w-full md:w-1/3">
        <CheckoutComponent />
      </div>
    </main>
  );
}

export default CartPage;
