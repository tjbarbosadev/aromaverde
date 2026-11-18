import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { Button, Heading, Text } from '@aromaverde/ui'
import { testimonials } from '../data/home'

export function HomeTestimonials() {
  const trackRef = useRef<HTMLUListElement>(null)

  function scroll(direction: 1 | -1) {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section
      className="bg-cream px-12 py-14 md:py-20"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <div className="flex items-end justify-between gap-6">
          <Heading
            level={2}
            id="testimonials-title"
            className="text-4xl font-normal md:text-5xl"
          >
            O que dizem sobre nós
          </Heading>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              aria-label="Depoimento anterior"
              className="size-12 rounded-none p-0"
              onClick={() => scroll(-1)}
            >
              <ChevronLeft aria-hidden className="size-5" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              aria-label="Próximo depoimento"
              className="size-12 rounded-none p-0"
              onClick={() => scroll(1)}
            >
              <ChevronRight aria-hidden className="size-5" />
            </Button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible"
        >
          {testimonials.map((t) => (
            <li key={t.id} className="w-[85%] shrink-0 snap-start md:w-auto">
              <figure className="flex h-full flex-col justify-between gap-8 bg-surface p-8">
                <blockquote>
                  <Text
                    as="span"
                    className="font-display text-2xl leading-snug text-ink"
                  >
                    “{t.quote}”
                  </Text>
                </blockquote>
                <figcaption>
                  <Text
                    as="span"
                    tone="smoke"
                    size="sm"
                    className="font-semibold uppercase tracking-[0.12em]"
                  >
                    {t.author}
                  </Text>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
