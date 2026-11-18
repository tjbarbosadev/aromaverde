import type { Product } from '../../domain/catalog/types.ts'
import type { CheckoutDraft } from '../../domain/checkout/types.ts'
import type { WhatsAppConfig } from '../../domain/checkout/whatsapp.ts'

export type CheckoutGateway = {
  createCheckoutUrl(
    draft: CheckoutDraft,
    products: Product[],
    config: WhatsAppConfig,
  ): string
}