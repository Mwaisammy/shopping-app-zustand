import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface cartProduct extends Product {
  quantity: number;
}

interface cartStore {
  cartItems: cartProduct[];
  addCartItem: (item: Product) => void;
  removeCartItem: (productId: number) => void;
}

export const useCartStore = create<cartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addCartItem: (item) => {
        const itemExits = get().cartItems.find(
          (cartItem) => cartItem.id === item.id
        );

        if (itemExits) {
          if (typeof itemExits.quantity === "number") {
            itemExits.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        } else {
          set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
      },

      removeCartItem: (productId) => {
        const itemExist = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );
        if (itemExist) {
          if (typeof itemExist.quantity === "number") {
            const updatedCartItems = get().cartItems.filter(
              (item) => item.id !== productId
            );

            set({ cartItems: updatedCartItems });
          }
        }
      },
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
