import { Link } from 'react-router-dom'
import { CartLineItem, Heading, Price, Text } from '@aromaverde/ui'
import { products } from '../data/catalog/products'
import { subtotalCents, totalQuantity } from '../domain/cart/rules'
import { useCart } from '../infra/cart/zustandCartStore'
import { Seo } from '../components/Seo'

export function CartPage() {
  const { cart, setQuantity, removeItem } = useCart()
  const byId = new Map(products.map((p) => [p.id, p]))
  const qty = totalQuantity(cart)
  const subtotal = subtotalCents(cart, products)

  return (
    <>
      <Seo title="Carrinho" description="Seu carrinho Aroma Verde." />
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <Heading level={1} className="mb-8 text-4xl font-normal">
          Carrinho
        </Heading>

        {qty === 0 ? (
          <div className="flex flex-col gap-4">
            <Text tone="smoke">Seu carrinho está vazio.</Text>
            <Link to="/loja" className="font-semibold text-ink underline">
              Ir para a loja
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-4">
              {cart.lines.map((line) => {
                const product = byId.get(line.productId)
                if (!product) return null
                return (
                  <li key={line.productId}>
                    <CartLineItem
                      name={product.name}
                      linePriceInCents={product.priceInCents * line.quantity}
                      quantity={line.quantity}
                      onQuantityChange={(q) => setQuantity(line.productId, q)}
                      onRemove={() => removeItem(line.productId)}
                    />
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center justify-between border-t border-line pt-4">
              <Text className="font-semibold">Subtotal</Text>
              <Price amountInCents={subtotal} />
            </div>
            <Link
              to="/checkout"
              className="inline-flex h-14 items-center justify-center bg-ink font-body font-semibold text-white no-underline"
            >
              Finalizar no WhatsApp
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
