import type { Meta, StoryObj } from '@storybook/react'
import { Price } from './Price'

const meta = {
  title: 'Atoms/Price',
  component: Price,
  tags: ['autodocs'],
} satisfies Meta<typeof Price>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { amountInCents: 2490 },
}

export const WholeReais: Story = {
  args: { amountInCents: 5000 },
}

export const SmallAmount: Story = {
  args: { amountInCents: 99 },
}