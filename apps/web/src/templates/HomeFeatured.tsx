import { Link } from 'react-router-dom'
import { Heading, ProductTile } from '@aromaverde/ui'
import { featuredProducts } from '../data/home'

export function HomeFeatured() {
  return (
    <section
      className="bg-blush px-12 py-14 md:py-20"
      aria-labelledby="featured-title"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 md:gap-12">
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Heading
            level={2}
            id="featured-title"
            className="text-4xl font-normal leading-[1.15] md:text-5xl"
          >
            Incensos feitos à mão para cada momento do dia
          </Heading>
          <Link
            to="/loja"
            className="inline-flex h-[52px] items-center justify-center bg-ink px-9 font-body text-base font-semibold text-white no-underline transition-colors hover:bg-sage-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Ver todos
          </Link>
        </div>

        <ul className="grid w-full grid-cols-2 gap-6 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <li key={p.id}>
              <ProductTile
                name={p.name}
                imageSrc={p.image}
                imageAlt={p.name}
                href="/loja"
                priceInCents={p.priceInCents}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
