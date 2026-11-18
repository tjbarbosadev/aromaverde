import { type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type BadgeTone = 'sage' | 'earth' | 'smoke'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone
}

const toneClasses: Record<BadgeTone, string> = {
  sage: 'bg-sage/15 text-sage-deep',
  earth: 'bg-earth/15 text-earth',
  smoke: 'bg-smoke/15 text-smoke',
}

export function Badge({ tone = 'sage', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2 py-0.5 font-body text-sm font-semibold',
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}