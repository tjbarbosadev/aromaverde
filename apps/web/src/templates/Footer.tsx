import { Link } from 'react-router-dom'
import { Heading, Text } from '@aromaverde/ui'
import { siteConfig } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10 md:py-20">
        <div className="flex flex-col gap-5">
          <Heading level={3} className="text-3xl font-semibold text-white">
            {siteConfig.brandName}
          </Heading>
          <Text size="sm" className="leading-normal text-muted">
            {siteConfig.tagline}
          </Text>
          <div>
            <Text as="span" className="mb-3 block font-semibold text-white">
              Siga
            </Text>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted underline underline-offset-4 hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Text as="span" className="text-xl font-semibold text-white">
            Loja
          </Text>
          <Link
            to="/loja"
            className="font-body text-sm text-muted no-underline hover:text-white"
          >
            Catálogo
          </Link>
          <Link
            to="/carrinho"
            className="font-body text-sm text-muted no-underline hover:text-white"
          >
            Carrinho
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Text as="span" className="text-xl font-semibold text-white">
            Contato
          </Text>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-body text-sm text-muted no-underline hover:text-white"
          >
            {siteConfig.contactEmail}
          </a>
          <Text size="sm" className="text-muted">
            WhatsApp: pedidos finalizados pelo chat
          </Text>
        </div>

        <div className="flex flex-col gap-3">
          <Text as="span" className="text-xl font-semibold text-white">
            Marca
          </Text>
          <Link
            to="/sobre"
            className="font-body text-sm text-muted no-underline hover:text-white"
          >
            Sobre
          </Link>
          <Link
            to="/"
            className="font-body text-sm text-muted no-underline hover:text-white"
          >
            Início
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-12 py-6 font-body text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.brandName}. Todos os direitos reservados.
          </p>
          <p>Feito à mão, com intenção.</p>
        </div>
      </div>
    </footer>
  )
}
