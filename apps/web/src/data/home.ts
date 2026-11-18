import { placeholder } from '../lib/placeholder'

export const partners = [
  { id: 'p1', name: 'Parceiro 1', logo: placeholder(160, 48, 'logo') },
  { id: 'p2', name: 'Parceiro 2', logo: placeholder(160, 48, 'logo') },
  { id: 'p3', name: 'Parceiro 3', logo: placeholder(160, 48, 'logo') },
  { id: 'p4', name: 'Parceiro 4', logo: placeholder(160, 48, 'logo') },
] as const

export const categoryCards = [
  {
    id: 'acolher',
    name: 'Acolher',
    priceInCents: 2490,
    image: placeholder(224, 270, 'Acolher'),
    href: '/loja?intencao=acolher',
  },
  {
    id: 'purificar',
    name: 'Purificar',
    priceInCents: 2990,
    image: placeholder(224, 270, 'Purificar'),
    href: '/loja?intencao=purificar',
  },
  {
    id: 'prosperidade',
    name: 'Prosperar',
    priceInCents: 3290,
    image: placeholder(224, 270, 'Prosperar'),
    href: '/loja?intencao=prosperidade',
  },
  {
    id: 'conectar',
    name: 'Conectar',
    priceInCents: 2790,
    image: placeholder(224, 270, 'Conectar'),
    href: '/loja?intencao=conectar',
  },
] as const

export const aboutValues = [
  {
    id: 'envio',
    title: 'Envio cuidadoso',
    text: 'Embalagem protegida para o incenso chegar inteiro e perfumado.',
  },
  {
    id: 'qualidade',
    title: 'Qualidade artesanal',
    text: 'Ervas e resinas selecionadas, produzidas em pequenos lotes.',
  },
  {
    id: 'compra',
    title: 'Compra segura',
    text: 'Finalize o pedido direto pelo WhatsApp, com atendimento humano.',
  },
] as const

export const featuredProducts = [
  {
    id: 'f1',
    name: 'Ritual da manhã',
    priceInCents: 2490,
    image: placeholder(240, 290, 'Ritual'),
  },
  {
    id: 'f2',
    name: 'Resina e sálvia',
    priceInCents: 3190,
    image: placeholder(240, 290, 'Resina'),
  },
  {
    id: 'f3',
    name: 'Caixa presente',
    priceInCents: 4590,
    image: placeholder(240, 290, 'Caixa'),
  },
  {
    id: 'f4',
    name: 'Kit iniciação',
    priceInCents: 3890,
    image: placeholder(240, 290, 'Kit'),
  },
] as const

export const testimonials = [
  {
    id: 't1',
    quote:
      'O aroma preencheu a casa sem pesar. Já virou parte do meu ritual de fim de dia.',
    author: 'Mariana S.',
  },
  {
    id: 't2',
    quote:
      'Embalagem linda e entrega cuidadosa. Dá para sentir que é feito à mão.',
    author: 'Carlos R.',
  },
  {
    id: 't3',
    quote:
      'Comprar pelo WhatsApp foi simples e o atendimento me ajudou a escolher.',
    author: 'Luiza P.',
  },
] as const

export const blogPosts = [
  {
    id: 'b1',
    title: 'Como montar um altar de intenções em casa',
    excerpt: 'Passo a passo simples para criar um cantinho de presença.',
    image: placeholder(640, 480, 'Altar'),
    href: '/sobre',
    large: true,
  },
  {
    id: 'b2',
    title: 'Resinas ou ervas: qual incenso escolher?',
    excerpt: 'Entenda as diferenças de aroma, fumaça e duração.',
    image: placeholder(640, 480, 'Resinas'),
    href: '/sobre',
    large: true,
  },
  {
    id: 'b3',
    title: 'Cuidados para guardar seu incenso',
    excerpt: 'Dicas rápidas para manter o perfume por mais tempo.',
    image: null,
    href: '/sobre',
    large: false,
  },
  {
    id: 'b4',
    title: 'Rituais de purificação para a mudança de estação',
    excerpt: 'Ideias para renovar o ambiente com leveza.',
    image: null,
    href: '/sobre',
    large: false,
  },
] as const

export const heroImage = {
  src: placeholder(750, 500, 'Hero'),
  alt: 'Peças artesanais em cerâmica e ritual — referência visual adaptada para a marca Aroma Verde.',
}
