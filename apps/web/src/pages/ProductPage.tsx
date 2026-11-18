import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Heading, Price, Text } from '@aromaverde/ui'
import type { Product } from '../domain/catalog/types'
import { localCatalogRepo } from '../infra/catalog/localCatalogRepo'
import { useCart } from '../infra/cart/zustandCartStore'
import { Seo } from '../components/Seo'
import { NotFoundPage } from './NotFoundPage'

export function ProductPage() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const [product, setProduct] = useState<Product | null | undefined>(undefined)

  useEffect(() => {
    if (!slug) {
      setProduct(null)
      return
    }
    void localCatalogRepo.getBySlug(slug).then(setProduct)
  }, [slug])

  if (product === undefined) {
    return (
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <Text tone="smoke">Carregando…</Text>
      </div>
    )
  }

  if (product === null) {
    return <NotFoundPage />
  }

  return (
    <>
      <Seo
        title={product.name}
        description={product.shortDescription}
        path={`/produto/${product.slug}`}
      />
      <article className="mx-auto grid max-w-[1200px] gap-10 px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
        <div className="aspect-[4/5] overflow-hidden bg-cream">
          <img
            src={product.images[0]?.src}
            alt={product.images[0]?.alt}
            className="size-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Heading level={1} className="text-4xl font-normal md:text-5xl">
            {product.name}
          </Heading>
          <Price amountInCents={product.priceInCents} className="text-xl" />
          {product.unitsPerPack ? (
            <Text tone="smoke" size="sm">
              Caixa com {product.unitsPerPack} varetas artesanais.
            </Text>
          ) : null}
          <Text className="leading-relaxed">{product.story}</Text>
          <div>
            <Heading level={2} className="mb-2 font-body text-lg font-bold">
              Ervas
            </Heading>
            <Text tone="smoke">{product.herbs.join(' · ')}</Text>
          </div>
          <div>
            <Heading level={2} className="mb-2 font-body text-lg font-bold">
              Desperta
            </Heading>
            <Text tone="smoke">{product.awakens}</Text>
          </div>
          <div>
            <Heading level={2} className="mb-2 font-body text-lg font-bold">
              Ideal para
            </Heading>
            <Text tone="smoke">{product.idealFor}</Text>
          </div>
          <div>
            <Heading level={2} className="mb-2 font-body text-lg font-bold">
              Cuidado
            </Heading>
            <Text tone="smoke" size="sm" className="leading-relaxed">
              {product.careNotes}
            </Text>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button type="button" size="lg" onClick={() => addItem(product.id, 1)}>
              Adicionar ao carrinho
            </Button>
            <Link
              to="/loja"
              className="inline-flex items-center font-body text-sm font-semibold text-smoke underline-offset-2 hover:underline"
            >
              Voltar à loja
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
