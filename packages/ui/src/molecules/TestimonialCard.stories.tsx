import type { Meta, StoryObj } from '@storybook/react'
import { TestimonialCard } from './TestimonialCard'

const meta = {
  title: 'Molecules/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Disponível no DS; não usar na Home v1 (fora da IA da marca).',
      },
    },
  },
} satisfies Meta<typeof TestimonialCard>

export default meta
type Story = StoryObj<typeof meta>

export const Cream: Story = {
  args: {
    quote: 'O aroma preencheu a casa sem pesar.',
    author: 'Mariana S.',
    location: 'São Paulo, BR',
    avatarSrc: 'https://placehold.it/96x96?text=MS',
    tone: 'cream',
  },
}

export const TiltedBlush: Story = {
  args: {
    ...Cream.args!,
    tone: 'blush',
    tilt: 'left',
  },
}
