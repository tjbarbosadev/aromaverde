import { Link } from 'react-router-dom'
import { Heading, Text } from '@aromaverde/ui'
import { storyTeaser } from '../data/home'

export function HomeStoryTeaser() {
  return (
    <section
      className="bg-surface px-12 py-16 md:py-20"
      aria-labelledby="story-title"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Heading
          level={2}
          id="story-title"
          className="text-4xl font-normal tracking-wide md:text-5xl"
        >
          {storyTeaser.title}
        </Heading>
        <Text tone="smoke" className="text-lg leading-relaxed">
          {storyTeaser.text}
        </Text>
        <Link
          to={storyTeaser.href}
          className="inline-flex h-14 items-center justify-center border border-ink bg-transparent px-9 font-body text-base font-semibold text-ink no-underline transition-colors hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {storyTeaser.cta}
        </Link>
      </div>
    </section>
  )
}
