import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'nome',
    label: 'Nome completo',
    placeholder: 'Como no pedido',
  },
}

export const WithError: Story = {
  args: {
    id: 'email',
    label: 'E-mail',
    type: 'email',
    error: 'Informe um e-mail válido',
    defaultValue: 'contato@',
  },
}

export const Disabled: Story = {
  args: {
    id: 'cupom',
    label: 'Cupom',
    disabled: true,
    placeholder: 'Indisponível',
  },
}