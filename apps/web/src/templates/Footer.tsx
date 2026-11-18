import { Link } from 'react-router-dom'
import { Heading, Text } from '@aromaverde/ui'
import { siteConfig } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-300 gap-12 px-12 py-16 md:grid-cols-4 md:gap-16 md:py-20">
        <div className="flex flex-col gap-4">
          <Heading level={3} className="text-2xl font-semibold text-white">
            {siteConfig.brandName}
          </Heading>
          <Text size="sm" className="leading-normal text-[#888]">
            {siteConfig.tagline}
          </Text>
          <Text size="sm" className="text-[#888]">
            © {year} {siteConfig.brandName}
          </Text>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-[#888] underline underline-offset-4 hover:text-white"
          >
            Instagram
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <Text as="span" className="font-semibold text-white">
            Loja
          </Text>
          <Link
            to="/loja"
            className="font-body text-sm text-[#888] no-underline hover:text-white"
          >
            Catálogo
          </Link>
          <Link
            to="/carrinho"
            className="font-body text-sm text-[#888] no-underline hover:text-white"
          >
            Carrinho
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Text as="span" className="font-semibold text-white">
            Contato
          </Text>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-body text-sm text-[#888] no-underline hover:text-white"
          >
            {siteConfig.contactEmail}
          </a>
          <Text size="sm" className="text-[#888]">
            Pedidos pelo WhatsApp
          </Text>
        </div>

        <div className="flex flex-col gap-3">
          <Text as="span" className="font-semibold text-white">
            Marca
          </Text>
          <Link
            to="/sobre"
            className="font-body text-sm text-[#888] no-underline hover:text-white"
          >
            Sobre
          </Link>
          <Link
            to="/"
            className="font-body text-sm text-[#888] no-underline hover:text-white"
          >
            Início
          </Link>
        </div>
      </div>
    </footer>
  )
}
