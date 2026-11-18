import type { RouteObject } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { PlaceholderPage } from '../pages/PlaceholderPage'
import { SiteLayout } from '../templates/SiteLayout'

export const routes: RouteObject[] = [
  {
    element: <SiteLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/loja', element: <PlaceholderPage title="Loja" /> },
      { path: '/sobre', element: <PlaceholderPage title="Sobre" /> },
    ],
  },
]
