import type { CatalogRepo } from '../../application/ports/CatalogRepo'
import type { IntentionId, Product, ProductLineId } from '../../domain/catalog/types'
import { intentions } from '../../data/catalog/intentions'
import { products } from '../../data/catalog/products'

export type CatalogFilter = {
  intention?: IntentionId
  line?: ProductLineId
}

export const localCatalogRepo: CatalogRepo & {
  listProductsFiltered(filter?: CatalogFilter): Promise<Product[]>
} = {
  async listProducts() {
    return products.filter((p) => p.available)
  },

  async listProductsFiltered(filter) {
    let list = products.filter((p) => p.available)
    if (filter?.intention) {
      list = list.filter((p) => p.intentionIds.includes(filter.intention!))
    }
    if (filter?.line) {
      list = list.filter((p) => p.lineId === filter.line)
    }
    return list
  },

  async getBySlug(slug) {
    return products.find((p) => p.slug === slug) ?? null
  },

  async listIntentions() {
    return intentions.map((i) => i.id)
  },
}
