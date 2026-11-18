import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { QuantityStepper } from './QuantityStepper'

const meta = {
  title: 'Molecules/QuantityStepper',
  component: QuantityStepper,
  tags: ['autodocs'],
} satisfies Meta<typeof QuantityStepper>

export default meta

type Story = StoryObj<typeof meta>

function ControlledStepper({ min = 1, max = 99 }: { min?: number; max?: number }) {
  const [value, setValue] = useState(1)
  return <QuantityStepper value={value} onChange={setValue} min={min} max={max} />
}

export const Default: Story = {
  render: () => <ControlledStepper />,
}

export const WithMax: Story = {
  render: () => <ControlledStepper min={1} max={5} />,
}