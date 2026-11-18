export type NavItem = {
  label: string
  href: string
}

export type SiteConfig = {
  brandName: string
  tagline: string
  heroEyebrow: string
  heroHeadline: string
  heroSupport: string
  contactEmail: string
  /** Placeholder até o número real ser informado (VITE_WHATSAPP_E164). */
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
  tagline: 'Incensos artesanais para acolher, purificar e prosperar.',
  heroEyebrow: 'Aroma Verde',
  heroHeadline: 'Sinta o ritual. Sinta a unicidade.',
  heroSupport:
    'Incensos artesanais de ervas e resinas — acolher, purificar e prosperar no seu ritmo.',
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
      'Loja artesanal de incensos naturais: ervas, resinas e intenções para acolher, purificar e prosperar.',
  },
}
