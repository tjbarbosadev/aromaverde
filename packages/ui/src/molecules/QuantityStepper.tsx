import { Button } from '../atoms/Button'
import { cn } from '../lib/cn'

export type QuantityStepperProps = {
  value: number
  onChange: (next: number) => void
  min?: number
  max?: number
  className?: string
}

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max,
  className,
}: QuantityStepperProps) {
  const atMin = value <= min
  const atMax = max !== undefined && value >= max

  return (
    <div
      className={cn('inline-flex items-center gap-1 rounded-md border border-sage/30 bg-cream', className)}
      role="group"
      aria-label="Quantidade"
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        aria-label="Diminuir quantidade"
        disabled={atMin}
        className="rounded-r-none px-2"
        onClick={() => onChange(value - 1)}
      >
        −
      </Button>
      <span aria-live="polite" className="min-w-8 text-center font-body text-sm font-semibold text-ink">
        {value}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        aria-label="Aumentar quantidade"
        disabled={atMax}
        className="rounded-l-none px-2"
        onClick={() => onChange(value + 1)}
      >
        +
      </Button>
    </div>
  )
}