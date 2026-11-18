import { NavLink } from 'react-router-dom'
import { cn } from '@aromaverde/ui'
import { siteConfig } from '../data/site'

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <NavLink
          to="/"
          className="font-display text-2xl font-bold text-cream no-underline"
          aria-label={`${siteConfig.brandName} — início`}
        >
          {siteConfig.brandName}
        </NavLink>
        <nav aria-label="Principal" className="-mx-3 flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn(
                  'inline-flex items-center rounded-md px-3 py-2 font-body text-sm font-semibold no-underline transition-colors',
                  isActive
                    ? 'bg-cream/20 text-cream'
                    : 'text-cream/85 hover:bg-cream/10 hover:text-cream',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
