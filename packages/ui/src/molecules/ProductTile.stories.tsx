import type { Meta, StoryObj } from '@storybook/react'
import { ProductTile } from './ProductTile'

const meta = {
  title: 'Molecules/ProductTile',
  component: ProductTile,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductTile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Raio de Sol',
    imageSrc: 'https://placehold.co/224x270/e8ebe4/2d4a3e?text=Raio',
    imageAlt: 'Raio de Sol',
    href: '/produto/raio-de-sol',
    priceInCents: 2890,
  },
}

export const Featured: Story = {
  args: {
    ...Default.args!,
    featured: true,
  },
}

export const WithCart: Story = {
  args: {
    ...Default.args!,
    onAddToCart: () => undefined,
  },
}
