import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it } from 'vitest'
import App from '../app/App'

afterEach(cleanup)

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('HomePage', () => {
  it('mostra headline do hero e o CTA para /loja', () => {
    renderAt('/')
    expect(
      screen.getByRole('heading', { level: 1, name: /Sinta o ritual/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explorar a loja/i })).toHaveAttribute(
      'href',
      '/loja',
    )
  })

  it('marca aparece no header e no eyebrow do hero', () => {
    renderAt('/')
    expect(
      screen.getByRole('link', { name: /Aroma Verde — início/i }),
    ).toBeInTheDocument()
    const brandMentions = screen.getAllByText('Aroma Verde')
    expect(brandMentions.length).toBeGreaterThanOrEqual(2)
  })

  it('imagem do hero tem alt descritivo', () => {
    renderAt('/')
    expect(screen.getByRole('img', { name: /artesanal|ritual|Aroma Verde/i })).toBeInTheDocument()
  })

  it('nav expõe Início, Loja e Sobre', () => {
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: /principal$/i })
    expect(nav).toHaveTextContent(/Início/)
    expect(screen.getAllByRole('link', { name: 'Loja' })[0]).toHaveAttribute('href', '/loja')
    expect(screen.getAllByRole('link', { name: 'Sobre' })[0]).toHaveAttribute('href', '/sobre')
  })

  it('rota /loja existe', () => {
    renderAt('/loja')
    expect(screen.getByRole('heading', { level: 1, name: 'Loja' })).toBeInTheDocument()
  })
})
