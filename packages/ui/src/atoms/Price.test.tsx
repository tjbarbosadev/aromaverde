import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { formatPriceBRL, Price } from './Price'

describe('formatPriceBRL', () => {
  it('formata centavos em BRL', () => {
    expect(formatPriceBRL(2490)).toMatch(/24,90/)
    expect(formatPriceBRL(2490)).toMatch(/R\$\s*24,90/)
  })
})

describe('Price', () => {
  it('exibe valor formatado e aria-label', () => {
    render(<Price amountInCents={1990} />)
    const price = screen.getByText(/19,90/)
    expect(price).toBeInTheDocument()
    expect(price).toHaveAttribute('aria-label', formatPriceBRL(1990))
  })
})