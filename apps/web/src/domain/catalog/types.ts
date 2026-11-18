export type IntentionId = 'acolher' | 'purificar' | 'prosperidade' | 'conectar'

/** Linhas do doc da marca (§3–6). */
export type ProductLineId = 'varetas' | 'bastao' | 'canelinhas' | 'palo-santo'

export type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  story: string
  herbs: string[]
  careNotes: string
  awakens: string
  idealFor: string
  lineId: ProductLineId
  intentionIds: IntentionId[]
  priceInCents: number
  currency: 'BRL'
  /** Varetas: tipicamente 5 por caixa. */
  unitsPerPack?: number
  images: { src: string; alt: string }[]
  available: boolean
}
