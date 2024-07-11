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
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
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

      increaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );
        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }

          set({ cartItems: [...get().cartItems] });
        }
      },

      decreaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );

        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            if (itemExists.quantity === 1) {
              const updatedCartItems = get().cartItems.filter(
                (item) => item.id !== productId
              );

              set({ cartItems: updatedCartItems });
            } else {
              itemExists.quantity--;
              set({ cartItems: [...get().cartItems] });
            }
          }
        }
      },

      // increaseQuantity: (productId) => {
      //   set({
      //     cartItems: get().cartItems.map((item: cartProduct) =>
      //       item.id === productId
      //         ? { ...item, quantity: item.quantity + 1 }
      //         : item
      //     ),
      //   });
      // },
      // decreaseQuantity: (productId) => {
      //   set({
      //     cartItems: get()
      //       .cartItems.map((item) =>
      //         item.id === productId && item.quantity > 1
      //           ? { ...item, quantity: item.quantity - 1 }
      //           : item
      //       )
      //       .filter((item) => item.quantity > 0),
      //   });
      // },

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
