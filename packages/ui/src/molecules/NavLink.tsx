import { type AnchorHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean
  href: string
}

export function NavLink({ active = false, className, children, ...props }: NavLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center rounded-md px-3 py-2 font-body text-sm font-semibold no-underline transition-colors',
        active
          ? 'bg-sage/15 text-sage-deep'
          : 'text-ink hover:bg-surface hover:text-sage-deep',
        className,
      )}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}