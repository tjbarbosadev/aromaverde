import { type HTMLAttributes } from 'react'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { cn } from '../lib/cn'

export type TestimonialTone = 'blush' | 'cream' | 'mist'

export type TestimonialCardProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  quote: string
  author: string
  location: string
  avatarSrc: string
  tone?: TestimonialTone
  /** Rotação visual do leque Earthware (±15°). */
  tilt?: 'left' | 'none' | 'right'
}

const toneClasses: Record<TestimonialTone, string> = {
  blush: 'bg-blush',
  cream: 'bg-cream',
  mist: 'bg-[#b8dbe5]',
}

const tiltClasses = {
  left: '-rotate-[12deg]',
  none: 'rotate-0',
  right: 'rotate-[12deg]',
} as const

export function TestimonialCard({
  quote,
  author,
  location,
  avatarSrc,
  tone = 'cream',
  tilt = 'none',
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        'relative flex w-[min(100%,22rem)] shrink-0 items-center gap-4 rounded-md p-5 shadow-sm',
        toneClasses[tone],
        tiltClasses[tilt],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="absolute -left-2 -top-3 font-display text-5xl leading-none text-ink"
      >
        “
      </span>
      <div className="flex w-24 shrink-0 flex-col items-center gap-2 text-center">
        <img
          src={avatarSrc}
          alt=""
          className="size-16 rounded-full object-cover"
          loading="lazy"
        />
        <Heading level={3} className="font-body text-sm font-bold">
          {author}
        </Heading>
        <Text as="span" tone="smoke" size="sm" className="text-xs leading-snug">
          {location}
        </Text>
      </div>
      <div aria-hidden className="h-20 w-px shrink-0 border-l border-dashed border-smoke/50" />
      <blockquote className="min-w-0 flex-1">
        <Text tone="smoke" size="sm" className="leading-relaxed">
          {quote}
        </Text>
      </blockquote>
    </figure>
  )
}
