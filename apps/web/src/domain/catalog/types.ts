export type IntentionId = 'acolher' | 'purificar' | 'prosperidade' | 'conectar'

export type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  story: string
  herbs: string[]
  careNotes: string
  intentionIds: IntentionId[]
  priceInCents: number
  currency: 'BRL'
  images: { src: string; alt: string }[]
  available: boolean
}