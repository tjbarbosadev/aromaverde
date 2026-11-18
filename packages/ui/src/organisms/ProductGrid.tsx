import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../lib/cn'

export type ProductGridProps = HTMLAttributes<HTMLUListElement> & {
  children: ReactNode
}

export function ProductGrid({ children, className, ...props }: ProductGridProps) {
  return (
    <ul
      className={cn(
        'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  )
}
