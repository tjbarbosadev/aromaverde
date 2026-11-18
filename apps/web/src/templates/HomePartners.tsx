import { partners } from '../data/home'

export function HomePartners() {
  return (
    <section className="bg-cream px-6 py-14 md:px-10 md:py-16" aria-labelledby="partners-title">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10">
        <h2 id="partners-title" className="text-center font-display text-3xl font-normal text-ink md:text-5xl">
          Eles confiam em nós
        </h2>
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
