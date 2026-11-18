import { Text } from '@aromaverde/ui'
import { siteConfig } from '../data/site'

export function Footer() {
  return (
    <footer className="bg-sage-deep text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold">{siteConfig.brandName}</p>
          <Text size="sm" className="mt-1 text-cream/80">
            Incensos artesanais · {new Date().getFullYear()}
          </Text>
        </div>
        <ul className="flex flex-col gap-1 font-body text-sm sm:items-end">
          <li>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-cream underline underline-offset-4"
            >
              {siteConfig.contactEmail}
            </a>
          </li>
          <li>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream underline underline-offset-4"
            >
              Instagram @aromaverde
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
