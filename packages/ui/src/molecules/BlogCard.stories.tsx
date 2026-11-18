import type { Meta, StoryObj } from '@storybook/react'
import { BlogCard } from './BlogCard'

const meta = {
  title: 'Molecules/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Disponível no DS; não usar na Home v1 (fora da IA da marca).',
      },
    },
  },
} satisfies Meta<typeof BlogCard>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    href: '/sobre',
    title: 'Como montar um altar',
    excerpt: 'Passo a passo para um cantinho de presença.',
    author: 'Equipe Aroma Verde',
    date: '16 abr 2024',
    imageSrc: 'https://placehold.it/640x384?text=Altar',
    size: 'lg',
  },
}

export const Small: Story = {
  args: {
    ...Large.args!,
    size: 'sm',
    imageSrc: 'https://placehold.it/280x280?text=Post',
  },
}
