import { type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export function formatPriceBRL(cents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100)
}

export type PriceProps = HTMLAttributes<HTMLSpanElement> & {
  amountInCents: number
}

export function Price({ amountInCents, className, ...props }: PriceProps) {
  const formatted = formatPriceBRL(amountInCents)

  return (
    <span
      className={cn('font-body font-semibold text-ink', className)}
      aria-label={formatted}
      {...props}
    >
      {formatted}
    </span>
  )
}