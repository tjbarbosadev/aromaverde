import { Heading, Text } from '@aromaverde/ui'
import { siteConfig } from '../data/site'

export function HomeContact() {
  return (
    <section
      className="bg-blush px-12 py-16 md:py-20"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <Heading
          level={2}
          id="contact-title"
          className="text-4xl font-normal md:text-5xl"
        >
          Contato
        </Heading>
        <Text tone="smoke" className="leading-relaxed">
          Dúvidas, encomendas e intenções especiais — fale com a gente.
        </Text>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="font-body text-lg font-semibold text-ink underline underline-offset-4"
        >
          {siteConfig.contactEmail}
        </a>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-base text-smoke underline underline-offset-4 hover:text-ink"
        >
          Instagram @aromaverde
        </a>
      </div>
    </section>
  )
}
