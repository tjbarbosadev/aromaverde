import { Link } from 'react-router-dom'
import { formatPriceBRL } from '@aromaverde/ui'
import { featuredProducts } from '../data/home'

export function HomeFeatured() {
  return (
    <section className="bg-peach/40 px-6 py-16 md:px-10 md:py-24" aria-labelledby="featured-title">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-16">
          <h2 id="featured-title" className="max-w-2xl font-display text-4xl font-normal leading-[1.1] text-ink md:text-6xl">
            Incensos feitos à mão para cada momento do dia
          </h2>
          <Link
            to="/loja"
            className="inline-flex h-[52px] shrink-0 items-center justify-center bg-ink px-9 font-body text-base font-semibold text-white no-underline transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Ver todos
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <li key={p.id}>
              <Link to="/loja" className="group flex flex-col gap-4 no-underline">
                <div className="flex aspect-[3/4] items-center justify-center bg-blush p-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full w-full object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-body text-lg font-bold text-ink">{p.name}</p>
                  <p className="font-body text-base text-smoke">{formatPriceBRL(p.priceInCents)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
