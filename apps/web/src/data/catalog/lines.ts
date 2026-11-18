import type { ProductLineId } from '../../domain/catalog/types'
import { placeholder } from '../../lib/placeholder'

export type ProductLine = {
  id: ProductLineId
  name: string
  description: string
  href: string
  image: string
}

export const productLines: ProductLine[] = [
  {
    id: 'varetas',
    name: 'Incensos em varetas',
    description: 'Caixas com 5 varetas artesanais, feitas uma a uma.',
    href: '/loja?linha=varetas',
    image: placeholder(400, 480, 'Varetas'),
  },
  {
    id: 'bastao',
    name: 'Bastões de ervas',
    description: 'Ervas na massa e no acabamento — peça especial Fogo Manso.',
    href: '/loja?linha=bastao',
    image: placeholder(400, 480, 'Bastao'),
  },
  {
    id: 'canelinhas',
    name: 'Canelinhas',
    description: 'Toque de prosperidade em criações artesanais de canela.',
    href: '/loja?linha=canelinhas',
    image: placeholder(400, 480, 'Canela'),
  },
  {
    id: 'palo-santo',
    name: 'Palo Santo',
    description: 'Madeira sagrada para atmosfera de tranquilidade.',
    href: '/loja?linha=palo-santo',
    image: placeholder(400, 480, 'Palo+Santo'),
  },
]
