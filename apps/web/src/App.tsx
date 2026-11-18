import { ping } from '@aromaverde/ui'

export default function App() {
  return (
    <main className="min-h-svh px-8 py-12">
      <h1 className="font-display text-4xl font-bold text-sage-deep">
        Aroma Verde
      </h1>
      <p className="mt-2 text-smoke">{ping()}</p>
    </main>
  )
}
