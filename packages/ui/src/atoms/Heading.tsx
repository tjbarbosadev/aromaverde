import { type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type HeadingLevel = 1 | 2 | 3 | 4

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level: HeadingLevel
}

const levelClasses: Record<HeadingLevel, string> = {
  1: 'text-4xl',
  2: 'text-3xl',
  3: 'text-2xl',
  4: 'text-xl',
}

export function Heading({ level, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as const

  return (
    <Tag
      className={cn(
        'font-display font-semibold text-ink',
        levelClasses[level],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}