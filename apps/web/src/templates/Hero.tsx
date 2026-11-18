import { Link } from 'react-router-dom'
import heroMugs from '../assets/earthware/hero-mugs.png'
import heroTexture from '../assets/earthware/hero-texture.jpeg'
import { siteConfig } from '../data/site'

export const heroImageAlt =
  'Peças artesanais em cerâmica e ritual — referência visual adaptada para a marca Aroma Verde.'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blush">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-50"
      >
        <img
          src={heroTexture}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6 pb-16 pt-14 text-center md:gap-12 md:pb-20 md:pt-20">
        <div className="flex max-w-[44rem] flex-col items-center gap-3">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-smoke">
            {siteConfig.heroEyebrow}
          </p>
          <h1 className="font-display text-5xl font-normal leading-[1.05] text-ink sm:text-6xl md:text-[5rem]">
            {siteConfig.heroHeadline}
          </h1>
          <p className="max-w-xl font-body text-lg leading-relaxed text-smoke md:text-[1.75rem] md:leading-[1.6]">
            {siteConfig.heroSupport}
          </p>
        </div>

        <Link
          to="/loja"
          className="inline-flex h-[58px] items-center justify-center bg-ink px-11 font-body text-lg font-semibold text-white no-underline transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Explorar a loja
        </Link>

        <div className="w-full max-w-[20rem] md:max-w-[24rem]">
          <img
            src={heroMugs}
            alt={heroImageAlt}
            className="h-auto w-full object-contain drop-shadow-[0px_44px_40px_rgba(0,0,0,0.22)]"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
