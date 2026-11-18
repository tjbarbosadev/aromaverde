import { type HTMLAttributes } from 'react'
import { Button } from '../atoms/Button'
import { Heading } from '../atoms/Heading'
import { Price } from '../atoms/Price'
import { cn } from '../lib/cn'

export type ProductTileProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  name: string
  imageSrc: string
  imageAlt: string
  href: string
  priceInCents: number
  /** Destaque no primeiro tile (Categories Earthware). */
  featured?: boolean
  onAddToCart?: () => void
}

/**
 * Tile Earthware: imagem em retângulo + nome + preço (+ Carrinho opcional).
 * Sem “card” com borda/sombra — a caixa branca/cinza é só o frame da foto.
 */
export function ProductTile({
  name,
  imageSrc,
  imageAlt,
  href,
  priceInCents,
  featured = false,
  onAddToCart,
  className,
  ...props
}: ProductTileProps) {
  return (
    <article className={cn('flex flex-col gap-3', className)} {...props}>
      <a href={href} className="flex flex-col gap-3 text-ink no-underline hover:text-sage-deep">
        <span
          className={cn(
            'relative flex aspect-[5/6] items-center justify-center overflow-hidden rounded-sm',
            featured ? 'bg-[#ededed]' : 'border border-[#ededed] bg-white',
          )}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[70%] max-w-[70%] object-contain"
            loading="lazy"
          />
        </span>
        <span className="flex flex-col gap-1">
          <Heading level={3} className="font-body text-base font-bold tracking-wide">
            {name}
          </Heading>
          <Price
            amountInCents={priceInCents}
            className="text-sm font-medium text-smoke"
          />
        </span>
      </a>
      {onAddToCart ? (
        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="w-fit rounded-none border-smoke px-3 py-1.5 text-smoke"
          onClick={onAddToCart}
        >
          Carrinho
        </Button>
      ) : null}
    </article>
  )
}
