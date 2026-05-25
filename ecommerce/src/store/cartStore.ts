import { create } from "zustand"
import { persist } from "zustand/middleware"

import type { CartItem } from "../types/cart"
import type { Product } from "../types/product"

type CartStore = {
  items: CartItem[]

  addToCart: (product: Product) => void

  removeFromCart: (id: number) => void

  increaseQuantity: (id: number) => void

  decreaseQuantity: (id: number) => void

  clearCart: () => void

  totalItems: () => number

  totalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items

        const existingItem = items.find(
          (item) => item.id === product.id
        )

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          })
        } else {
          set({
            items: [
              ...items,
              {
                ...product,
                quantity: 1,
              },
            ],
          })
        }
      },

      removeFromCart: (id) => {
        set({
          items: get().items.filter(
            (item) => item.id !== id
          ),
        })
      },

      increaseQuantity: (id) => {
        set({
          items: get().items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        })
      },

      decreaseQuantity: (id) => {
        set({
          items: get()
            .items.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      totalItems: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity,
          0
        )
      },

      totalPrice: () => {
        return get().items.reduce(
          (total, item) =>
            total + item.price * item.quantity,
          0
        )
      },
    }),
    {
      name: "cart-storage",
    }
  )
)