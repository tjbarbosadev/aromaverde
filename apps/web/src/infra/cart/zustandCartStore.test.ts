import { beforeEach, describe, expect, it } from 'vitest'
import { zustandCartStore } from './zustandCartStore'

describe('zustandCartStore', () => {
  beforeEach(() => {
    sessionStorage.clear()
    zustandCartStore.clear()
  })

  it('adiciona e soma quantidade', () => {
    zustandCartStore.addItem('raio-de-sol', 1)
    zustandCartStore.addItem('raio-de-sol', 2)
    expect(zustandCartStore.getCart().lines).toEqual([
      { productId: 'raio-de-sol', quantity: 3 },
    ])
  })

  it('remove e altera qty', () => {
    zustandCartStore.addItem('palo-santo', 2)
    zustandCartStore.setQuantity('palo-santo', 1)
    expect(zustandCartStore.getCart().lines[0]?.quantity).toBe(1)
    zustandCartStore.removeItem('palo-santo')
    expect(zustandCartStore.getCart().lines).toEqual([])
  })
})
