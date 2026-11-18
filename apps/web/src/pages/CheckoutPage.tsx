import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, Heading, Input, Text } from '@aromaverde/ui'
import { products } from '../data/catalog/products'
import { totalQuantity } from '../domain/cart/rules'
import {
  checkoutFormSchema,
  type CheckoutFormInput,
} from '../domain/checkout/schema'
import { siteConfig } from '../data/site'
import { useCart } from '../infra/cart/zustandCartStore'
import { whatsappCheckoutGateway } from '../infra/checkout/whatsappCheckoutGateway'
import { Seo } from '../components/Seo'

export function CheckoutPage() {
  const { cart } = useCart()
  const qty = totalQuantity(cart)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormInput>({
    resolver: zodResolver(checkoutFormSchema),
  })

  if (qty === 0) {
    return (
      <>
        <Seo title="Checkout" />
        <div className="mx-auto max-w-lg px-6 py-16 text-center">
          <Heading level={1} className="mb-4 text-3xl font-normal">
            Carrinho vazio
          </Heading>
          <Text tone="smoke" className="mb-6">
            Adicione produtos antes de finalizar.
          </Text>
          <Link to="/loja" className="font-semibold underline">
            Ir para a loja
          </Link>
        </div>
      </>
    )
  }

  function onSubmit(data: CheckoutFormInput) {
    const url = whatsappCheckoutGateway.createCheckoutUrl(
      {
        customerName: data.customerName,
        note: data.note,
        lines: cart.lines,
      },
      products,
      { phoneE164: siteConfig.whatsappE164 },
    )
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Seo title="Checkout" description="Finalize seu pedido pelo WhatsApp." />
      <div className="mx-auto max-w-lg px-6 py-12 md:py-16">
        <Heading level={1} className="mb-2 text-4xl font-normal">
          Checkout
        </Heading>
        <Text tone="smoke" className="mb-8">
          Enviaremos seu pedido pelo WhatsApp para atendimento humano.
        </Text>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="customerName"
            label="Seu nome"
            {...register('customerName')}
            error={errors.customerName?.message}
          />
          <Input
            id="note"
            label="Observação (opcional)"
            {...register('note')}
            error={errors.note?.message}
          />
          <Button type="submit" size="lg">
            Abrir WhatsApp
          </Button>
        </form>
      </div>
    </>
  )
}
