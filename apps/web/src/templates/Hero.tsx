import { Link } from 'react-router-dom'
import { cn } from '@aromaverde/ui'
import heroImage from '../assets/hero-incense.jpg'
import { siteConfig } from '../data/site'

export const heroImageAlt =
  'Varetas de incenso acesas em primeiro plano, com fios de fumaça subindo sobre um fundo verde desfocado.'

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[85svh] items-end overflow-hidden bg-sage-deep">
      <img
        src={heroImage}
        alt={heroImageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/10 md:bg-gradient-to-r md:from-ink/85 md:via-ink/45 md:to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-32 md:pb-24">
        <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-cream sm:text-7xl md:text-8xl">
          {siteConfig.brandName}
        </h1>
        <p className="mt-5 max-w-md font-body text-lg text-cream/90 md:text-xl">
          {siteConfig.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/loja"
            className={cn(
              'inline-flex items-center justify-center rounded-md bg-cream px-6 py-3 font-body text-lg font-semibold text-sage-deep no-underline transition-colors',
              'hover:bg-surface focus-visible:outline-cream',
            )}
          >
            Explorar a loja
          </Link>
          <Link
            to="/sobre"
            className="inline-flex items-center justify-center rounded-md px-4 py-3 font-body text-lg font-semibold text-cream underline decoration-cream/50 underline-offset-4 transition-colors hover:decoration-cream focus-visible:outline-cream"
          >
            Conhecer a marca
          </Link>
        </div>
      </div>
    </section>
  )
}
