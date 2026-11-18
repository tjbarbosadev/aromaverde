import { Heading, Text } from '@aromaverde/ui'
import { essence } from '../data/home'

export function HomeEssence() {
  return (
    <section
      className="bg-cream px-12 py-16 md:py-20"
      aria-labelledby="essence-title"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <Heading
          level={2}
          id="essence-title"
          className="text-4xl font-normal tracking-wide md:text-5xl"
        >
          {essence.title}
        </Heading>
        <Text tone="smoke" className="text-lg leading-relaxed">
          {essence.text}
        </Text>
      </div>
    </section>
  )
}
