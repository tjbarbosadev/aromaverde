import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from './NavLink'

const meta = {
  title: 'Molecules/NavLink',
  component: NavLink,
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>

export default meta

type Story = StoryObj<typeof meta>

export const Inactive: Story = {
  args: {
    href: '/loja',
    children: 'Loja',
    active: false,
  },
}

export const Active: Story = {
  args: {
    href: '/loja',
    children: 'Loja',
    active: true,
  },
}