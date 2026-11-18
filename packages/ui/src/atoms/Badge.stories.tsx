import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Sage: Story = {
  args: { children: 'Novo', tone: 'sage' },
}

export const Earth: Story = {
  args: { children: 'Promoção', tone: 'earth' },
}

export const Smoke: Story = {
  args: { children: 'Esgotado', tone: 'smoke' },
}

export const LongText: Story = {
  args: { children: 'Edição limitada de outono', tone: 'sage' },
}