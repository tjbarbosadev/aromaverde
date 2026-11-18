import type { Meta, StoryObj } from '@storybook/react'
import { Leaf, ShoppingBag } from 'lucide-react'
import { Icon } from './Icon'

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Decorative: Story = {
  args: { icon: Leaf, size: 28 },
}

export const WithLabel: Story = {
  args: { icon: ShoppingBag, label: 'Carrinho', size: 28 },
}