import { stripeCheckoutUrl } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cartProduct, useCartStore } from "@/store/cart-store";
import React, { useTransition } from "react";

const getTotal = (cartItem: cartProduct[]) => {
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItem.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price! * item.quantity!;
  });

  return {
    totalPrice,
    totalQuantity,
  };
};
function CheckoutComponent() {
  const [isPending, startTransition] = useTransition();
  const { cartItems } = useCartStore();

  const quantity = getTotal(cartItems).totalQuantity;
  const price = getTotal(cartItems).totalPrice;

  const roundedTwo = (price: number) => {
    return parseFloat(price.toFixed(2));
  };

  const handleClick = () => {
    startTransition(() => {
      stripeCheckoutUrl(cartItems).then(({ data }) => {
        console.log(data);
        window.location.href = data as string;
      });
    });
  };

  return (
    <Card className="flex flex-col shadow-md border w-full max-w-lg mx-auto max-h-fit aspect-auto p-3 mb-3">
      <h2 className="font-semibold tracking-widest">Cart Summary</h2>
      <Separator className="mt-4" />
      <div className="flex items-center justify-between mt-4">
        <h2 className="font-medium tracking-wider">Subtotal</h2>

        <h4>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </h4>
      </div>

      <Separator className="mt-4" />

      <Button
        className="mt-4 bg-orange-500 hover:bg-orange-600 "
        onClick={handleClick}
        disabled={isPending}
      >
        {`Checkout ( ${roundedTwo(price)} )`}
      </Button>
    </Card>
  );
}

export default CheckoutComponent;
