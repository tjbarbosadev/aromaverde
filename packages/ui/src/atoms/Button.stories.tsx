import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { children: 'Comprar', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Ver catálogo', variant: 'secondary' },
}

export const Ghost: Story = {
  args: { children: 'Saiba mais', variant: 'ghost' },
}

export const Disabled: Story = {
  args: { children: 'Indisponível', disabled: true },
}

export const LongText: Story = {
  args: {
    children: 'Adicionar ao carrinho com frete calculado depois',
    className: 'max-w-xs',
  },
}