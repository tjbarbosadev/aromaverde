import type { IntentionId, Product } from '../../domain/catalog/types.ts'

export type CatalogRepo = {
  listProducts(): Promise<Product[]>
  getBySlug(slug: string): Promise<Product | null>
  listIntentions(): Promise<IntentionId[]>
}