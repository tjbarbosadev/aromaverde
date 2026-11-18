import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import { QuantityStepper } from './QuantityStepper'

function StepperHarness({
  initial = 1,
  min,
  max,
}: {
  initial?: number
  min?: number
  max?: number
}) {
  const [value, setValue] = useState(initial)
  return <QuantityStepper value={value} onChange={setValue} min={min} max={max} />
}

describe('QuantityStepper', () => {
  it('incrementa e decrementa a quantidade', async () => {
    const user = userEvent.setup()
    render(<StepperHarness initial={2} min={1} max={10} />)

    expect(screen.getByText('2')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Aumentar quantidade' }))
    expect(screen.getByText('3')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Diminuir quantidade' }))
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('não diminui abaixo do mínimo', async () => {
    const user = userEvent.setup()
    render(<StepperHarness initial={1} min={1} />)

    const decrease = screen.getByRole('button', { name: 'Diminuir quantidade' })
    expect(decrease).toBeDisabled()
    await user.click(decrease)
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})