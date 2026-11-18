import { Heading, Text } from '@aromaverde/ui'

export default function App() {
  return (
    <main className="min-h-svh px-8 py-12">
      <Heading level={1} className="font-bold text-sage-deep">
        Aroma Verde
      </Heading>
      <Text className="mt-2" tone="smoke">
        Loja artesanal de incensos
      </Text>
    </main>
  )
}