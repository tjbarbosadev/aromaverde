import { type LucideIcon } from 'lucide-react'
import { cn } from '../lib/cn'

export type IconProps = {
  icon: LucideIcon
  label?: string
  className?: string
  size?: number
}

export function Icon({ icon: IconComponent, label, className, size = 24 }: IconProps) {
  if (label) {
    return (
      <span role="img" aria-label={label} className={cn('inline-flex text-ink', className)}>
        <IconComponent size={size} aria-hidden className="shrink-0" />
      </span>
    )
  }

  return (
    <IconComponent
      size={size}
      aria-hidden
      className={cn('shrink-0 text-ink', className)}
    />
  )
}