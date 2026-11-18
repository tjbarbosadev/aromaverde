import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { testimonials } from '../data/home'

export function HomeTestimonials() {
  const trackRef = useRef<HTMLUListElement>(null)

  function scroll(direction: 1 | -1) {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const arrow =
    'inline-flex size-12 items-center justify-center border border-ink bg-transparent text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

  return (
    <section className="bg-cream px-6 py-16 md:px-10 md:py-24" aria-labelledby="testimonials-title">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-14">
        <div className="flex items-end justify-between gap-6">
          <h2 id="testimonials-title" className="font-display text-4xl font-normal text-ink md:text-6xl">
            O que dizem sobre nós
          </h2>
          <div className="flex gap-3">
            <button type="button" aria-label="Depoimento anterior" className={arrow} onClick={() => scroll(-1)}>
              <ChevronLeft aria-hidden className="size-5" />
            </button>
            <button type="button" aria-label="Próximo depoimento" className={arrow} onClick={() => scroll(1)}>
              <ChevronRight aria-hidden className="size-5" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible"
        >
          {testimonials.map((t) => (
            <li key={t.id} className="w-[85%] shrink-0 snap-start md:w-auto">
              <figure className="flex h-full flex-col justify-between gap-8 bg-surface p-8">
                <blockquote className="font-display text-2xl leading-snug text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="font-body text-sm font-semibold uppercase tracking-[0.12em] text-smoke">
                  {t.author}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
