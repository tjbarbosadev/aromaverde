import type { Product } from '../catalog/types.ts'
import type { CheckoutDraft } from './types.ts'

export type WhatsAppConfig = {
  phoneE164: string
}

function buildMessage(draft: CheckoutDraft, products: Product[]): string {
  const nameById = new Map(products.map((p) => [p.id, p.name]))
  const lines: string[] = [`Olá! Meu nome é ${draft.customerName}.`, '', 'Pedido:']
  for (const line of draft.lines) {
    const productName = nameById.get(line.productId) ?? line.productId
    lines.push(`- ${productName} x${line.quantity}`)
  }
  if (draft.note?.trim()) {
    lines.push('', `Observação: ${draft.note.trim()}`)
  }
  return lines.join('\n')
}

export function toWhatsAppUrl(
  draft: CheckoutDraft,
  products: Product[],
  config: WhatsAppConfig,
): string {
  const digits = config.phoneE164.replace(/\D/g, '')
  const message = buildMessage(draft, products)
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}