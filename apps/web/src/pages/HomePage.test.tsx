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
  it('mostra a marca como heading e o CTA para /loja', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: /aroma verde/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explorar a loja/i })).toHaveAttribute('href', '/loja')
  })

  it('imagem do hero tem alt descritivo', () => {
    renderAt('/')
    expect(screen.getByRole('img', { name: /incenso/i })).toBeInTheDocument()
  })

  it('nav expõe Início, Loja e Sobre', () => {
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: /principal/i })
    expect(nav).toHaveTextContent(/Início/)
    expect(screen.getByRole('link', { name: 'Loja' })).toHaveAttribute('href', '/loja')
    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute('href', '/sobre')
  })

  it('rota /loja existe', () => {
    renderAt('/loja')
    expect(screen.getByRole('heading', { level: 1, name: 'Loja' })).toBeInTheDocument()
  })
})
