import { describe, expect, it } from 'vitest'
import { checkoutFormSchema } from './schema.ts'

describe('checkoutFormSchema', () => {
  it('rejects empty customer name', () => {
    const result = checkoutFormSchema.safeParse({ customerName: '' })
    expect(result.success).toBe(false)
  })
})