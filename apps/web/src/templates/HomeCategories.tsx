import { Link } from 'react-router-dom'
import { formatPriceBRL } from '@aromaverde/ui'
import { categoryCards } from '../data/home'

export function HomeCategories() {
  return (
    <section className="bg-surface px-6 py-16 md:px-10 md:py-24" aria-labelledby="categories-title">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-16">
          <h2 id="categories-title" className="font-display text-4xl font-normal text-ink md:text-6xl">
            Categorias
          </h2>
          <p className="max-w-md font-body text-base leading-relaxed text-smoke md:text-lg">
            Escolha pela intenção: cada linha de incenso acompanha um momento do
            seu ritual.
          </p>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((cat) => (
            <li key={cat.id}>
              <Link to={cat.href} className="group flex flex-col items-center gap-5 text-center no-underline">
                <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-full bg-cream transition-colors group-hover:bg-blush">
                  <img
                    src={cat.image}
                    alt={`Linha ${cat.name}`}
                    className="w-3/4 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-body text-xl font-bold text-ink">{cat.name}</p>
                  <p className="font-body text-base text-smoke">
                    a partir de {formatPriceBRL(cat.priceInCents)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
