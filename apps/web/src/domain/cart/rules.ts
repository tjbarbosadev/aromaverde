import type { Product } from '../catalog/types.ts'
import type { Cart, CartLine } from './types.ts'

export function emptyCart(): Cart {
  return { lines: [] }
}

export function addItem(cart: Cart, productId: string, qty = 1): Cart {
  const existing = cart.lines.find((line) => line.productId === productId)
  if (existing) {
    return {
      lines: cart.lines.map((line) =>
        line.productId === productId
          ? { ...line, quantity: line.quantity + qty }
          : line,
      ),
    }
  }
  const nextLine: CartLine = { productId, quantity: qty }
  return { lines: [...cart.lines, nextLine] }
}

export function removeItem(cart: Cart, productId: string): Cart {
  return {
    lines: cart.lines.filter((line) => line.productId !== productId),
  }
}

export function setQuantity(cart: Cart, productId: string, qty: number): Cart {
  if (qty < 1) {
    return removeItem(cart, productId)
  }
  const exists = cart.lines.some((line) => line.productId === productId)
  if (!exists) {
    return addItem(cart, productId, qty)
  }
  return {
    lines: cart.lines.map((line) =>
      line.productId === productId ? { ...line, quantity: qty } : line,
    ),
  }
}

export function subtotalCents(cart: Cart, products: Product[]): number {
  const priceById = new Map(products.map((p) => [p.id, p.priceInCents]))
  return cart.lines.reduce((sum, line) => {
    const price = priceById.get(line.productId) ?? 0
    return sum + price * line.quantity
  }, 0)
}

export function totalQuantity(cart: Cart): number {
  return cart.lines.reduce((sum, line) => sum + line.quantity, 0)
}