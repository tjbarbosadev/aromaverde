import { Heading } from '@aromaverde/ui'
import { partners } from '../data/home'

export function HomePartners() {
  return (
    <section
      className="bg-cream px-12 py-12 md:py-16"
      aria-labelledby="partners-title"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
        <Heading
          level={2}
          id="partners-title"
          className="text-center text-3xl font-normal md:text-4xl"
        >
          Eles confiam em nós
        </Heading>
        <ul className="grid w-full grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4">
          {partners.map((p) => (
            <li key={p.id}>
              <img
                src={p.logo}
                alt={p.name}
                className="h-12 w-auto opacity-70 md:h-14"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
