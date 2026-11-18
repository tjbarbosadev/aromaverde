import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'acolher',
    name: 'Acolher',
    blurb: 'Ervas suaves para abrir a casa e o corpo.',
    href: '/loja?intencao=acolher',
  },
  {
    id: 'purificar',
    name: 'Purificar',
    blurb: 'Resinas e fumaça limpa para renovar o espaço.',
    href: '/loja?intencao=purificar',
  },
  {
    id: 'prosperidade',
    name: 'Prosperar',
    blurb: 'Combinações que acompanham foco e abundância.',
    href: '/loja?intencao=prosperidade',
  },
  {
    id: 'conectar',
    name: 'Conectar',
    blurb: 'Rituais para presença, círculo e partilha.',
    href: '/loja?intencao=conectar',
  },
] as const

export function HomeCategories() {
  return (
    <section className="bg-surface px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-normal text-ink md:text-6xl">
            Categorias
          </h2>
          <p className="max-w-xl font-body text-base leading-relaxed text-smoke md:text-xl">
            Escolha pela intenção — a mesma lógica do Earthware “collections”,
            adaptada aos rituais Aroma Verde.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                to={cat.href}
                className="group flex h-full flex-col border border-line bg-white p-6 no-underline transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-6 flex aspect-square items-center justify-center bg-cream">
                  <span className="font-display text-5xl text-sage-deep/40 transition-colors group-hover:text-sage-deep">
                    {cat.name.slice(0, 1)}
                  </span>
                </div>
                <p className="font-body text-xl font-bold tracking-wide text-ink">
                  {cat.name}
                </p>
                <p className="mt-2 font-body text-base text-smoke">{cat.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
