import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from '../molecules/ProductCard'
import { ProductGrid } from './ProductGrid'

const meta = {
  title: 'Organisms/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['children'] },
  },
} satisfies Meta<typeof ProductGrid>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { name: 'Raio de Sol', price: 2890 },
  { name: 'Brisa Serena', price: 2890 },
  { name: 'Fogo Manso', price: 4590 },
  { name: 'Palo Santo', price: 3990 },
]

export const Default: Story = {
  render: () => (
    <ProductGrid>
      {items.map((item) => (
        <li key={item.name}>
          <ProductCard
            name={item.name}
            imageSrc={`https://placehold.co/400x300/e8ebe4/2d4a3e?text=${encodeURIComponent(item.name)}`}
            imageAlt={item.name}
            href={`/produto/${item.name}`}
            priceInCents={item.price}
          />
        </li>
      ))}
    </ProductGrid>
  ),
}
