import { ShoppingBag } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@aromaverde/ui'
import { siteConfig } from '../data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur-sm supports-[backdrop-filter]:bg-surface/80">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 md:px-10 md:py-5">
        <NavLink
          to="/"
          className="justify-self-start font-display text-3xl font-semibold tracking-tight text-ink no-underline"
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
                    : 'font-medium text-smoke hover:text-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/carrinho"
          className="justify-self-end inline-flex items-center gap-1.5 font-body text-base font-semibold text-smoke no-underline hover:text-ink"
        >
          <ShoppingBag aria-hidden className="size-5" strokeWidth={1.75} />
          Carrinho
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
                isActive ? 'font-bold text-ink' : 'font-medium text-smoke',
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
