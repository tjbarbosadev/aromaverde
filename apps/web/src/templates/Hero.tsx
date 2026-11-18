import { Link } from 'react-router-dom'
import { Heading, Text } from '@aromaverde/ui'
import { heroImage } from '../data/home'
import { siteConfig } from '../data/site'

export const heroImageAlt = heroImage.alt

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blush">
      <div className="relative mx-auto flex max-w-300 flex-col items-center gap-8 px-12 py-16 text-center md:gap-10 md:py-20">
        <div className="flex max-w-[36rem] flex-col items-center gap-3">
          <Heading
            level={1}
            className="text-[2.5rem] font-normal leading-[1.05] tracking-tight sm:text-5xl md:text-[4rem]"
          >
            {siteConfig.heroHeadline}
          </Heading>
          <Text tone="smoke" className="max-w-[24rem] text-base leading-[1.6] md:text-lg">
            {siteConfig.heroSupport}
          </Text>
        </div>

        <Link
          to="/loja"
          className="inline-flex h-14 items-center justify-center bg-ink px-10 font-body text-base font-semibold text-white no-underline transition-colors hover:bg-sage-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Explorar a loja
        </Link>

        <div className="w-full max-w-[36rem] shadow-[0px_44px_64px_0px_rgba(0,0,0,0.27)]">
          <img
            src={heroImage.src}
            alt={heroImageAlt}
            className="h-auto w-full bg-white object-contain"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
