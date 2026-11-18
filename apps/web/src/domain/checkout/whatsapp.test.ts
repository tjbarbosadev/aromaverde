import { describe, expect, it } from 'vitest'
import type { Product } from '../catalog/types.ts'
import type { CheckoutDraft } from './types.ts'
import { toWhatsAppUrl } from './whatsapp.ts'

const products: Product[] = [
  {
    id: 'p1',
    slug: 'vela-acolher',
    name: 'Vela Acolher',
    shortDescription: '',
    story: '',
    herbs: [],
    careNotes: '',
    intentionIds: ['acolher'],
    priceInCents: 4500,
    currency: 'BRL',
    images: [],
    available: true,
  },
]

describe('toWhatsAppUrl', () => {
  it('normalizes phone and encodes message with customer and lines', () => {
    const draft: CheckoutDraft = {
      customerName: 'Ana',
      lines: [{ productId: 'p1', quantity: 2 }],
      note: 'Entregar à tarde',
    }
    const url = toWhatsAppUrl(draft, products, { phoneE164: '+55 11 99999-9999' })
    expect(url.startsWith('https://wa.me/5511999999999?text=')).toBe(true)
    const text = decodeURIComponent(url.split('text=')[1] ?? '')
    expect(text).toContain('Ana')
    expect(text).toContain('Vela Acolher x2')
    expect(text).toContain('Entregar à tarde')
  })
})