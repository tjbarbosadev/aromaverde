import { type HTMLAttributes } from 'react'
import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { cn } from '../lib/cn'

export type BlogCardSize = 'lg' | 'sm'

export type BlogCardProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  href: string
  title: string
  excerpt: string
  author: string
  date: string
  imageSrc: string
  imageAlt?: string
  size?: BlogCardSize
}

export function BlogCard({
  href,
  title,
  excerpt,
  author,
  date,
  imageSrc,
  imageAlt = '',
  size = 'lg',
  className,
  ...props
}: BlogCardProps) {
  const large = size === 'lg'

  return (
    <article className={cn('flex flex-col gap-3', className)} {...props}>
      <a href={href} className="flex flex-col gap-3 text-ink no-underline hover:opacity-90">
        <div
          className={cn(
            'overflow-hidden rounded-md bg-[#e8e8e8]',
            large ? 'aspect-[5/3]' : 'aspect-square',
          )}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="size-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1.5">
            <div
              className={cn(
                'flex items-start justify-between gap-3 font-body text-smoke',
                large ? 'text-xs' : 'text-[0.65rem]',
              )}
            >
              <span>{author}</span>
              <span className="shrink-0">{date}</span>
            </div>
            <div className="h-px w-full bg-line" />
          </div>
          <Heading
            level={3}
            className={cn(
              'font-body font-semibold leading-snug',
              large ? 'text-lg' : 'text-sm',
            )}
          >
            {title}
          </Heading>
          <Text
            tone="smoke"
            size="sm"
            className={cn('line-clamp-3 leading-relaxed', !large && 'text-xs')}
          >
            {excerpt}
          </Text>
        </div>
      </a>
    </article>
  )
}
