import { type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type TextTone = 'ink' | 'smoke' | 'sage'
export type TextSize = 'sm' | 'md' | 'lg'

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: 'p' | 'span'
  tone?: TextTone
  size?: TextSize
}

const toneClasses: Record<TextTone, string> = {
  ink: 'text-ink',
  smoke: 'text-smoke',
  sage: 'text-sage',
}

const sizeClasses: Record<TextSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

export function Text({
  as: Component = 'p',
  tone = 'ink',
  size = 'md',
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn('font-body', toneClasses[tone], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  )
}