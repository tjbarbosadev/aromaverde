import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Ink: Story = {
  args: {
    children: 'Incensos artesanais com ervas selecionadas.',
    tone: 'ink',
  },
}

export const Smoke: Story = {
  args: {
    children: 'Texto secundário para legendas e notas.',
    tone: 'smoke',
  },
}

export const Sage: Story = {
  args: {
    children: 'Destaque em tom sage para mensagens suaves.',
    tone: 'sage',
  },
}

export const LongText: Story = {
  args: {
    children:
      'Este é um parágrafo longo para validar quebra de linha e legibilidade em blocos de texto que descrevem o cuidado artesanal da Aroma Verde.',
    size: 'md',
  },
}