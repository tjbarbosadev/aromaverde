import { Link } from 'react-router-dom'
import { Heading, Text } from '@aromaverde/ui'
import { productLines } from '../data/home'

/** Linhas do doc da marca — §9 Nossos produtos. */
export function HomeProductLines() {
  return (
    <section
      className="bg-surface px-12 py-16 md:py-20"
      aria-labelledby="lines-title"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <Heading
            level={2}
            id="lines-title"
            className="text-4xl font-normal md:text-5xl"
          >
            Nossos produtos
          </Heading>
          <Text tone="smoke" className="max-w-md leading-relaxed">
            Incensos em varetas, bastões de ervas, canelinhas e Palo Santo —
            todos feitos à mão.
          </Text>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productLines.map((line) => (
            <li key={line.id}>
              <Link
                to={line.href}
                className="group flex flex-col gap-4 text-ink no-underline"
              >
                <span className="flex aspect-[5/6] items-center justify-center overflow-hidden rounded-sm border border-[#ededed] bg-white">
                  <img
                    src={line.image}
                    alt=""
                    aria-hidden
                    className="max-h-[70%] max-w-[70%] object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </span>
                <Heading
                  level={3}
                  className="font-body text-base font-bold tracking-wide"
                >
                  {line.name}
                </Heading>
                <Text tone="smoke" size="sm" className="leading-relaxed">
                  {line.description}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
