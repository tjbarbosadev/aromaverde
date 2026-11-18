import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { CartStore } from '../../application/ports/CartStore'
import type { Cart } from '../../domain/cart/types'
import {
  addItem as addItemRule,
  emptyCart,
  removeItem as removeItemRule,
  setQuantity as setQuantityRule,
} from '../../domain/cart/rules'

type CartState = {
  cart: Cart
  addItem: (productId: string, qty?: number) => void
  removeItem: (productId: string) => void
  setQuantity: (productId: string, qty: number) => void
  clear: () => void
}

const useCartZustand = create<CartState>()(
  persist(
    (set) => ({
      cart: emptyCart(),
      addItem: (productId, qty = 1) =>
        set((s) => ({ cart: addItemRule(s.cart, productId, qty) })),
      removeItem: (productId) =>
        set((s) => ({ cart: removeItemRule(s.cart, productId) })),
      setQuantity: (productId, qty) =>
        set((s) => ({ cart: setQuantityRule(s.cart, productId, qty) })),
      clear: () => set({ cart: emptyCart() }),
    }),
    {
      name: 'aromaverde-cart',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (s) => ({ cart: s.cart }),
    },
  ),
)

export const zustandCartStore: CartStore = {
  getCart: () => useCartZustand.getState().cart,
  subscribe: (listener) =>
    useCartZustand.subscribe((state) => listener(state.cart)),
  addItem: (productId, qty) => useCartZustand.getState().addItem(productId, qty),
  removeItem: (productId) => useCartZustand.getState().removeItem(productId),
  setQuantity: (productId, qty) =>
    useCartZustand.getState().setQuantity(productId, qty),
  clear: () => useCartZustand.getState().clear(),
}

export function useCart() {
  return useCartZustand()
}
