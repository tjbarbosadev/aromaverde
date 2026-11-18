import { z } from 'zod'

export const checkoutFormSchema = z.object({
  customerName: z.string().min(2),
  note: z.string().max(280).optional(),
})

export type CheckoutFormInput = z.infer<typeof checkoutFormSchema>