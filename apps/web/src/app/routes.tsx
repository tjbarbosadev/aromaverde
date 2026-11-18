import type { RouteObject } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProductPage } from '../pages/ProductPage'
import { ShopPage } from '../pages/ShopPage'
import { SiteLayout } from '../templates/SiteLayout'

export const routes: RouteObject[] = [
  {
    element: <SiteLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/loja', element: <ShopPage /> },
      { path: '/produto/:slug', element: <ProductPage /> },
      { path: '/sobre', element: <AboutPage /> },
      { path: '/carrinho', element: <CartPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
