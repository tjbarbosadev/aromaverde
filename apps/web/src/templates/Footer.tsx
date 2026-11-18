import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-10 md:px-10 md:py-20">
        <div className="flex flex-col gap-5">
          <p className="font-display text-3xl font-semibold">{siteConfig.brandName}</p>
          <p className="font-body text-sm leading-normal text-muted">
            {siteConfig.tagline}
          </p>
          <div>
            <p className="mb-3 font-body text-base font-semibold">Siga</p>
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
          <p className="font-body text-xl font-semibold">Loja</p>
          <Link to="/loja" className="font-body text-sm text-muted no-underline hover:text-white">
            Catálogo
          </Link>
          <Link to="/carrinho" className="font-body text-sm text-muted no-underline hover:text-white">
            Carrinho
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-body text-xl font-semibold">Contato</p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-body text-sm text-muted no-underline hover:text-white"
          >
            {siteConfig.contactEmail}
          </a>
          <p className="font-body text-sm text-muted">WhatsApp: pedidos finalizados pelo chat</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-body text-xl font-semibold">Marca</p>
          <Link to="/sobre" className="font-body text-sm text-muted no-underline hover:text-white">
            Sobre
          </Link>
          <Link to="/" className="font-body text-sm text-muted no-underline hover:text-white">
            Início
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-6 font-body text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {year} {siteConfig.brandName}. Todos os direitos reservados.</p>
          <p>Feito à mão, com intenção.</p>
        </div>
      </div>
    </footer>
  )
}
