export type NavItem = {
  label: string
  href: string
}

export type SiteConfig = {
  brandName: string
  tagline: string
  heroHeadline: string
  heroSupport: string
  contactEmail: string
  /** Placeholder até o número real (VITE_WHATSAPP_E164). */
  whatsappE164: string
  instagramUrl: string
  nav: NavItem[]
  seoDefaults: {
    titleTemplate: string
    description: string
  }
}

export const siteConfig: SiteConfig = {
  brandName: 'Aroma Verde',
  tagline: 'A natureza em sua forma mais artesanal.',
  heroHeadline: 'Mais do que acender um incenso, é criar um momento.',
  heroSupport:
    'Incensos artesanais de ervas — um a um, à mão — para acolher, purificar, prosperar e se reconectar.',
  contactEmail: 'contato@aromaverdeincensos.com.br',
  whatsappE164: import.meta.env.VITE_WHATSAPP_E164 || '+5500000000000',
  instagramUrl: 'https://www.instagram.com/aromaverde/',
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Loja', href: '/loja' },
    { label: 'Sobre', href: '/sobre' },
  ],
  seoDefaults: {
    titleTemplate: '%s · Aroma Verde',
    description:
      'Incensos artesanais feitos à mão: varetas, bastões de ervas, canelinhas e Palo Santo.',
  },
}
