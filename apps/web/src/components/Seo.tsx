import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../data/site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

export function Seo({
  title,
  description = siteConfig.seoDefaults.description,
  path = '',
}: SeoProps) {
  const fullTitle = title
    ? siteConfig.seoDefaults.titleTemplate.replace('%s', title)
    : siteConfig.brandName
  const base = import.meta.env.VITE_SITE_URL || 'https://aromaverdeincensos.com.br'
  const url = `${base.replace(/\/$/, '')}${path || '/'}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
