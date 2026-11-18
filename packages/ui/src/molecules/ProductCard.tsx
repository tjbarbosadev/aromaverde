import { type HTMLAttributes } from 'react'
import { Button } from '../atoms/Button'
import { Heading } from '../atoms/Heading'
import { Price } from '../atoms/Price'
import { Text } from '../atoms/Text'
import { cn } from '../lib/cn'

export type ProductCardProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  name: string
  description?: string
  imageSrc: string
  imageAlt: string
  href: string
  priceInCents: number
  onAddToCart?: () => void
}

export function ProductCard({
  name,
  description,
  imageSrc,
  imageAlt,
  href,
  priceInCents,
  onAddToCart,
  className,
  ...props
}: ProductCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col overflow-hidden rounded-lg border border-sage/20 bg-cream shadow-sm',
        className,
      )}
      {...props}
    >
      <a href={href} className="block aspect-[4/3] overflow-hidden bg-surface">
        <img src={imageSrc} alt={imageAlt} className="size-full object-cover" />
      </a>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Heading level={3} className="text-xl">
          <a href={href} className="text-ink no-underline hover:text-sage-deep">
            {name}
          </a>
        </Heading>
        {description ? (
          <Text tone="smoke" size="sm" className="line-clamp-2">
            {description}
          </Text>
        ) : null}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <Price amountInCents={priceInCents} />
          {onAddToCart ? (
            <Button type="button" size="sm" onClick={onAddToCart}>
              Adicionar ao carrinho
            </Button>
          ) : (
            <a
              href={href}
              className="font-body text-sm font-semibold text-sage underline-offset-2 hover:text-sage-deep hover:underline"
            >
              Ver produto
            </a>
          )}
        </div>
      </div>
    </article>
  )
}