import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { IntentionChip } from './IntentionChip'

const meta = {
  title: 'Molecules/IntentionChip',
  component: IntentionChip,
  tags: ['autodocs'],
} satisfies Meta<typeof IntentionChip>

export default meta

type Story = StoryObj<typeof meta>

export const UnselectedButton: Story = {
  args: {
    children: 'Calma',
    selected: false,
    onClick: fn(),
  },
}

export const SelectedButton: Story = {
  args: {
    children: 'Calma',
    selected: true,
    onClick: fn(),
  },
}

export const Link: Story = {
  args: {
    children: 'Proteção',
    href: '/intencoes/protecao',
    selected: false,
  },
}