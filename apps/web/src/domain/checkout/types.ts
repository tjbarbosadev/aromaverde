import type { CartLine } from '../cart/types.ts'

export type CheckoutDraft = {
  customerName: string
  note?: string
  lines: CartLine[]
}