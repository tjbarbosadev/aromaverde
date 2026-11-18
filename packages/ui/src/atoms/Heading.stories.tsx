import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Level1: Story = {
  args: { level: 1, children: 'Aroma Verde' },
}

export const Level2: Story = {
  args: { level: 2, children: 'Nossa coleção' },
}

export const Level3: Story = {
  args: { level: 3, children: 'Incenso de sálvia' },
}

export const Level4: Story = {
  args: { level: 4, children: 'Detalhes do produto' },
}

export const LongText: Story = {
  args: {
    level: 2,
    children: 'Coleção especial de incensos naturais para ambientes e rituais',
  },
}