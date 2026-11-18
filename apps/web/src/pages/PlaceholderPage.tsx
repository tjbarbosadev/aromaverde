import { Heading, Text } from '@aromaverde/ui'

type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      <Heading level={1} className="text-sage-deep">
        {title}
      </Heading>
      <Text className="mt-3" tone="smoke">
        Em breve.
      </Text>
    </section>
  )
}
