import { describe, expect, it } from 'vitest'
import type { Product } from '../catalog/types.ts'
import {
  addItem,
  emptyCart,
  removeItem,
  setQuantity,
  subtotalCents,
  totalQuantity,
} from './rules.ts'

const products: Product[] = [
  {
    id: 'p1',
    slug: 'vela-1',
    name: 'Vela Acolher',
    shortDescription: '',
    story: '',
    herbs: [],
    careNotes: '',
    awakens: 'Presença.',
    idealFor: 'Ritual.',
    lineId: 'varetas',
    intentionIds: ['acolher'],
    priceInCents: 4500,
    currency: 'BRL',
    images: [],
    available: true,
  },
  {
    id: 'p2',
    slug: 'vela-2',
    name: 'Vela Purificar',
    shortDescription: '',
    story: '',
    herbs: [],
    careNotes: '',
    awakens: 'Presença.',
    idealFor: 'Ritual.',
    lineId: 'varetas',
    intentionIds: ['purificar'],
    priceInCents: 3200,
    currency: 'BRL',
    images: [],
    available: true,
  },
]

describe('cart rules', () => {
  it('emptyCart starts with no lines', () => {
    expect(emptyCart()).toEqual({ lines: [] })
  })

  it('addItem adds a new line', () => {
    const cart = addItem(emptyCart(), 'p1')
    expect(cart.lines).toEqual([{ productId: 'p1', quantity: 1 }])
  })

  it('addItem sums quantity when product already exists', () => {
    let cart = addItem(emptyCart(), 'p1', 2)
    cart = addItem(cart, 'p1', 3)
    expect(cart.lines).toEqual([{ productId: 'p1', quantity: 5 }])
  })

  it('removeItem removes the line', () => {
    let cart = addItem(emptyCart(), 'p1', 2)
    cart = removeItem(cart, 'p1')
    expect(cart.lines).toEqual([])
  })

  it('setQuantity updates quantity', () => {
    let cart = addItem(emptyCart(), 'p1', 1)
    cart = setQuantity(cart, 'p1', 4)
    expect(cart.lines).toEqual([{ productId: 'p1', quantity: 4 }])
  })

  it('setQuantity below 1 removes line', () => {
    let cart = addItem(emptyCart(), 'p1', 2)
    cart = setQuantity(cart, 'p1', 0)
    expect(cart.lines).toEqual([])
  })

  it('subtotalCents sums priceInCents * quantity', () => {
    let cart = addItem(emptyCart(), 'p1', 2)
    cart = addItem(cart, 'p2', 1)
    expect(subtotalCents(cart, products)).toBe(4500 * 2 + 3200)
  })

  it('totalQuantity sums line quantities', () => {
    let cart = addItem(emptyCart(), 'p1', 2)
    cart = addItem(cart, 'p2', 3)
    expect(totalQuantity(cart)).toBe(5)
  })
})