"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function CartButton() {
  const { cartItems } = useCartStore();
  const cartCount = cartItems.length;
  return (
    <div className="flex items-center space-x-3 ">
      <Button
        asChild
        className="bg-orange-500 hover:bg-orange-600 hover:text-black transition-all ease-in-out duration-300 size-1/2  lg:size-3/4 "
      >
        <Link href={"/cart"}>Cart</Link>
      </Button>
      <ShoppingCart className="size-4 md:size-6 lg:size-10" />

      <p className="font-semibold text-xs md:text-sm lg:text-lg">
        ({cartCount})
      </p>
    </div>
  );
}

export default CartButton;
