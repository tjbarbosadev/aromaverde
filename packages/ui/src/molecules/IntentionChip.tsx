import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '../lib/cn'

type IntentionChipBase = {
  selected?: boolean
  children: ReactNode
  className?: string
}

export type IntentionChipButtonProps = IntentionChipBase &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className' | 'type'> & {
    href?: never
    onClick: () => void
  }

export type IntentionChipLinkProps = IntentionChipBase &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href'> & {
    href: string
    onClick?: never
  }

export type IntentionChipProps = IntentionChipButtonProps | IntentionChipLinkProps

const chipClasses = (selected: boolean, className?: string) =>
  cn(
    'inline-flex items-center rounded-full border px-3 py-1 font-body text-sm font-semibold transition-colors',
    selected
      ? 'border-sage bg-sage text-cream'
      : 'border-sage/40 bg-cream text-sage hover:border-sage hover:bg-sage/10',
    className,
  )

export function IntentionChip(props: IntentionChipProps) {
  if ('href' in props && props.href) {
    const { selected = false, children, className, href, ...linkRest } = props
    return (
      <a
        href={href}
        aria-current={selected ? 'true' : undefined}
        className={chipClasses(selected, className)}
        {...linkRest}
      >
        {children}
      </a>
    )
  }

  const { selected = false, children, className, onClick, ...buttonRest } =
    props as IntentionChipButtonProps
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={chipClasses(selected, className)}
      onClick={onClick}
      {...buttonRest}
    >
      {children}
    </button>
  )
}