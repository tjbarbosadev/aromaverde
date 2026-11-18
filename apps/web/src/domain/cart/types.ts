export type CartLine = { productId: string; quantity: number }

export type Cart = { lines: CartLine[] }