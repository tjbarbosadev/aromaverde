import { Button } from '../atoms/Button'
import { Price } from '../atoms/Price'
import { Text } from '../atoms/Text'
import { cn } from '../lib/cn'
import { QuantityStepper } from './QuantityStepper'

export type CartLineItemProps = {
  name: string
  linePriceInCents: number
  quantity: number
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
  min?: number
  max?: number
  className?: string
}

export function CartLineItem({
  name,
  linePriceInCents,
  quantity,
  onQuantityChange,
  onRemove,
  min,
  max,
  className,
}: CartLineItemProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 border-b border-sage/20 py-3',
        className,
      )}
    >
      <div className="min-w-0 flex-1">
        <Text as="span" className="block font-semibold text-ink">
          {name}
        </Text>
        <Price amountInCents={linePriceInCents} className="text-sm text-smoke" />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <QuantityStepper value={quantity} onChange={onQuantityChange} min={min} max={max} />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          aria-label={`Remover ${name}`}
          onClick={onRemove}
        >
          Remover
        </Button>
      </div>
    </div>
  )
}