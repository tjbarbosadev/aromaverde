import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { afterEach, describe, expect, it } from 'vitest'
import App from '../app/App'

afterEach(cleanup)

function renderAt(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>,
  )
}

describe('HomePage', () => {
  it('mostra headline do hero e o CTA para /loja', () => {
    renderAt('/')
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Mais do que acender um incenso/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explorar a loja/i })).toHaveAttribute(
      'href',
      '/loja',
    )
  })

  it('compõe seções alinhadas ao doc da marca', () => {
    renderAt('/')
    const titles = [
      'Nossos produtos',
      /Incensos feitos à mão/i,
      'Nossa essência',
      'Nossa história',
      'Contato',
    ].map((name) => screen.getByRole('heading', { level: 2, name }))
    for (let i = 1; i < titles.length; i++) {
      expect(
        titles[i - 1].compareDocumentPosition(titles[i]) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy()
    }
    expect(screen.queryByRole('heading', { name: /blog|newsletter|parceiro|depoimento/i })).toBeNull()
  })

  it('não expõe Sign Up / Login', () => {
    renderAt('/')
    expect(screen.queryByText(/sign up|login|entrar/i)).not.toBeInTheDocument()
  })

  it('loja lista produtos do catálogo', async () => {
    renderAt('/loja')
    expect(
      await screen.findByRole('heading', { level: 1, name: /Nossos produtos/i }),
    ).toBeInTheDocument()
    expect(await screen.findByText('Raio de Sol')).toBeInTheDocument()
  })

  it('PDP carrega por slug', async () => {
    renderAt('/produto/raio-de-sol')
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Raio de Sol' }),
    ).toBeInTheDocument()
  })

  it('sobre publica a narrativa', () => {
    renderAt('/sobre')
    expect(
      screen.getByRole('heading', { level: 1, name: /Nossa história/i }),
    ).toBeInTheDocument()
  })
})
