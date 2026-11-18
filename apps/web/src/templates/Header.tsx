import { ShoppingBag } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Badge, cn, Icon, Text } from '@aromaverde/ui'
import { totalQuantity } from '../domain/cart/rules'
import { siteConfig } from '../data/site'
import { useCart } from '../infra/cart/zustandCartStore'

export function Header() {
  const { cart } = useCart()
  const qty = totalQuantity(cart)

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-12 py-3.5">
        <NavLink
          to="/"
          className="justify-self-start inline-flex items-center gap-2.5 no-underline"
          aria-label={`${siteConfig.brandName} — início`}
        >
          <img
            src="/brand/logo-header.png"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0"
            decoding="async"
          />
          <span className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
            {siteConfig.brandName}
          </span>
        </NavLink>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn(
                  'font-body text-sm no-underline transition-colors',
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
          <Icon icon={ShoppingBag} size={18} className="text-smoke" />
          <Text as="span" tone="smoke" size="sm" className="font-semibold">
            Carrinho
          </Text>
          {qty > 0 ? (
            <Badge tone="sage" className="ml-1">
              {qty}
            </Badge>
          ) : null}
        </NavLink>
      </div>

      <nav
        aria-label="Principal mobile"
        className="flex justify-center gap-5 border-t border-line px-6 py-2.5 md:hidden"
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
