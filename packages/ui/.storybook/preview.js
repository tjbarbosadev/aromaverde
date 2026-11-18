import '../src/styles/globals.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: 'var(--color-surface)' },
        { name: 'cream', value: 'var(--color-cream)' },
        { name: 'ink', value: 'var(--color-ink)' },
      ],
    },
  },
}

export default preview
