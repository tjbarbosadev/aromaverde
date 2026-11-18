import type { Cart } from '../../domain/cart/types.ts'

export type CartStore = {
  getCart(): Cart
  subscribe(listener: (cart: Cart) => void): () => void
  addItem(productId: string, qty?: number): void
  removeItem(productId: string): void
  setQuantity(productId: string, qty: number): void
  clear(): void
}