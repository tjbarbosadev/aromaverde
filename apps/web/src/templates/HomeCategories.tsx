import { Heading, ProductTile, Text } from '@aromaverde/ui'
import { categoryCards } from '../data/home'

export function HomeCategories() {
  return (
    <section
      className="bg-surface px-12 py-14 md:py-20"
      aria-labelledby="categories-title"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-16">
          <Heading
            level={2}
            id="categories-title"
            className="shrink-0 text-4xl font-normal md:text-5xl"
          >
            Categorias
          </Heading>
          <Text tone="smoke" className="max-w-md leading-relaxed md:pt-2">
            Escolha pela intenção: cada linha de incenso acompanha um momento do
            seu ritual.
          </Text>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((cat, index) => (
            <li key={cat.id}>
              <ProductTile
                name={cat.name}
                imageSrc={cat.image}
                imageAlt={`Linha ${cat.name}`}
                href={cat.href}
                priceInCents={cat.priceInCents}
                featured={index === 0}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
