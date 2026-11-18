import type { CheckoutGateway } from '../../application/ports/CheckoutGateway'
import { toWhatsAppUrl } from '../../domain/checkout/whatsapp'

export const whatsappCheckoutGateway: CheckoutGateway = {
  createCheckoutUrl(draft, products, config) {
    return toWhatsAppUrl(draft, products, config)
  },
}
