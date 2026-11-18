import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { CartLineItem } from './CartLineItem'

const meta = {
  title: 'Molecules/CartLineItem',
  component: CartLineItem,
  tags: ['autodocs'],
} satisfies Meta<typeof CartLineItem>

export default meta

type Story = StoryObj<typeof meta>

function ControlledLine() {
  const [quantity, setQuantity] = useState(2)
  return (
    <CartLineItem
      name="Incenso Palo Santo"
      linePriceInCents={4980}
      quantity={quantity}
      onQuantityChange={setQuantity}
      onRemove={fn()}
      min={1}
      max={10}
    />
  )
}

export const Default: Story = {
  render: () => <ControlledLine />,
}