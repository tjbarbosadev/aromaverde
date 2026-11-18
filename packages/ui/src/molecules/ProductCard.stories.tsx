import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './ProductCard'

const meta = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>

export default meta

type Story = StoryObj<typeof meta>

const base = {
  name: 'Incenso Palo Santo',
  description: 'Aroma amadeirado e suave para momentos de calma e presença.',
  imageSrc: 'https://placehold.co/400x300/e8ebe4/2d4a3e?text=Palo+Santo',
  imageAlt: 'Pacote de incenso Palo Santo Aroma Verde',
  href: '/produtos/palo-santo',
  priceInCents: 2490,
}

export const WithAddToCart: Story = {
  args: {
    ...base,
    onAddToCart: () => undefined,
  },
}

export const ViewProductLink: Story = {
  args: base,
}

export const LongDescription: Story = {
  args: {
    ...base,
    description:
      'Texto longo para validar line-clamp em cards do catálogo com descrição extensa do produto e notas olfativas detalhadas.',
    onAddToCart: () => undefined,
  },
}