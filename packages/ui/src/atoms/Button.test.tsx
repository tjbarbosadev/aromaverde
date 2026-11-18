import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renderiza com role button e nome acessível', () => {
    render(<Button>Comprar agora</Button>)
    expect(screen.getByRole('button', { name: 'Comprar agora' })).toBeInTheDocument()
  })

  it('usa type button por padrão', () => {
    render(<Button>Enviar</Button>)
    expect(screen.getByRole('button', { name: 'Enviar' })).toHaveAttribute('type', 'button')
  })

  it('respeita disabled', () => {
    render(<Button disabled>Indisponível</Button>)
    expect(screen.getByRole('button', { name: 'Indisponível' })).toBeDisabled()
  })
})