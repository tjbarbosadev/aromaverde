import { Link } from 'react-router-dom'
import { Heading, Text } from '@aromaverde/ui'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Não encontrado" description="Página ou produto não encontrado." />
      <div className="mx-auto max-w-lg px-6 py-20 text-center">
        <Heading level={1} className="mb-4 text-4xl font-normal">
          Não encontramos isso
        </Heading>
        <Text tone="smoke" className="mb-8">
          O produto ou página pode ter mudado de lugar.
        </Text>
        <Link
          to="/loja"
          className="inline-flex h-12 items-center bg-ink px-8 font-body font-semibold text-white no-underline"
        >
          Ir para a loja
        </Link>
      </div>
    </>
  )
}
