import { ShoppingBag } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn, Icon, Text } from '@aromaverde/ui'
import { siteConfig } from '../data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-12 py-4">
        <NavLink
          to="/"
          className="justify-self-start font-display text-2xl font-semibold tracking-tight text-ink no-underline md:text-3xl"
          aria-label={`${siteConfig.brandName} — início`}
        >
          {siteConfig.brandName}
        </NavLink>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn(
                  'font-body text-base no-underline transition-colors',
                  isActive
                    ? 'font-bold text-ink'
                    : 'font-normal text-smoke hover:text-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/carrinho"
          className="justify-self-end inline-flex items-center gap-1.5 no-underline"
        >
          <Icon icon={ShoppingBag} size={20} className="text-smoke" />
          <Text as="span" tone="smoke" className="font-semibold">
            Carrinho
          </Text>
        </NavLink>
      </div>

      <nav
        aria-label="Principal mobile"
        className="flex justify-center gap-5 border-t border-line px-6 py-3 md:hidden"
      >
        {siteConfig.nav.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === '/'}
            className={({ isActive }) =>
              cn(
                'font-body text-sm no-underline',
                isActive ? 'font-bold text-ink' : 'font-normal text-smoke',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
