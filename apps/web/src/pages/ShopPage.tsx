import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Heading,
  IntentionChip,
  ProductCard,
  ProductGrid,
  Text,
} from '@aromaverde/ui'
import type { IntentionId, Product, ProductLineId } from '../domain/catalog/types'
import { intentions } from '../data/catalog/intentions'
import { productLines } from '../data/catalog/lines'
import { localCatalogRepo } from '../infra/catalog/localCatalogRepo'
import { Seo } from '../components/Seo'
import { useCart } from '../infra/cart/zustandCartStore'

const intentionIds = new Set(intentions.map((i) => i.id))
const lineIds = new Set(productLines.map((l) => l.id))

export function ShopPage() {
  const [params, setParams] = useSearchParams()
  const { addItem } = useCart()
  const [items, setItems] = useState<Product[]>([])

  const intentionParam = params.get('intencao')
  const lineParam = params.get('linha')
  const intention =
    intentionParam && intentionIds.has(intentionParam as IntentionId)
      ? (intentionParam as IntentionId)
      : undefined
  const line =
    lineParam && lineIds.has(lineParam as ProductLineId)
      ? (lineParam as ProductLineId)
      : undefined

  useEffect(() => {
    void localCatalogRepo
      .listProductsFiltered({ intention, line })
      .then(setItems)
  }, [intention, line])

  function setIntention(id?: IntentionId) {
    const next = new URLSearchParams(params)
    if (id) next.set('intencao', id)
    else next.delete('intencao')
    setParams(next)
  }

  return (
    <>
      <Seo title="Loja" description="Catálogo de incensos artesanais Aroma Verde." />
      <div className="mx-auto max-w-300 px-6 py-12 md:px-12 md:py-16">
        <Heading level={1} className="mb-3 text-4xl font-normal md:text-5xl">
          Nossos produtos
        </Heading>
        <Text tone="smoke" className="mb-8 max-w-xl">
          Escolha por intenção ou por linha. Cada peça é feita à mão, uma a uma.
        </Text>

        <div className="mb-10 flex flex-wrap gap-2">
          <IntentionChip
            selected={!intention}
            onClick={() => setIntention(undefined)}
          >
            Todas
          </IntentionChip>
          {intentions.map((i) => (
            <IntentionChip
              key={i.id}
              selected={intention === i.id}
              onClick={() => setIntention(i.id)}
            >
              {i.label}
            </IntentionChip>
          ))}
        </div>

        {line ? (
          <Text tone="smoke" size="sm" className="mb-6">
            Filtrando linha:{' '}
            {productLines.find((l) => l.id === line)?.name ?? line}{' '}
            <Link to="/loja" className="underline">
              limpar
            </Link>
          </Text>
        ) : null}

        <ProductGrid>
          {items.map((p) => (
            <li key={p.id}>
              <ProductCard
                name={p.name}
                description={p.shortDescription}
                imageSrc={p.images[0]?.src ?? ''}
                imageAlt={p.images[0]?.alt ?? p.name}
                href={`/produto/${p.slug}`}
                priceInCents={p.priceInCents}
                onAddToCart={() => addItem(p.id, 1)}
              />
            </li>
          ))}
        </ProductGrid>
      </div>
    </>
  )
}
