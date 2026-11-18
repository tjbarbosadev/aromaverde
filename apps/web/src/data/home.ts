import cat1 from '../assets/earthware/cat-1.png'
import cat2 from '../assets/earthware/cat-2.png'
import cat3 from '../assets/earthware/cat-3.png'
import cat4 from '../assets/earthware/cat-4.png'
import feat1 from '../assets/earthware/feat-1.png'
import feat2 from '../assets/earthware/feat-2.png'
import blog1 from '../assets/earthware/blog-1.jpeg'
import blog2 from '../assets/earthware/blog-2.jpeg'
import partner1 from '../assets/earthware/partner-1.svg'
import partner2 from '../assets/earthware/partner-2.svg'
import partner3 from '../assets/earthware/partner-3.svg'
import partner4 from '../assets/earthware/partner-4.svg'
import aboutDot1 from '../assets/earthware/about-dot-1.png'
import aboutDot2 from '../assets/earthware/about-dot-2.png'
import aboutDot3 from '../assets/earthware/about-dot-3.png'
import aboutIcon1 from '../assets/earthware/about-icon-1.svg'
import aboutIcon2 from '../assets/earthware/about-icon-2.svg'
import aboutIcon3 from '../assets/earthware/about-icon-3.svg'

export const partners = [
  { id: 'p1', name: 'Parceiro 1', logo: partner1 },
  { id: 'p2', name: 'Parceiro 2', logo: partner2 },
  { id: 'p3', name: 'Parceiro 3', logo: partner3 },
  { id: 'p4', name: 'Parceiro 4', logo: partner4 },
] as const

export const categoryCards = [
  {
    id: 'acolher',
    name: 'Acolher',
    priceInCents: 2490,
    image: cat1,
    href: '/loja?intencao=acolher',
  },
  {
    id: 'purificar',
    name: 'Purificar',
    priceInCents: 2990,
    image: cat2,
    href: '/loja?intencao=purificar',
  },
  {
    id: 'prosperidade',
    name: 'Prosperar',
    priceInCents: 3290,
    image: cat3,
    href: '/loja?intencao=prosperidade',
  },
  {
    id: 'conectar',
    name: 'Conectar',
    priceInCents: 2790,
    image: cat4,
    href: '/loja?intencao=conectar',
  },
] as const

export const aboutValues = [
  {
    id: 'envio',
    title: 'Envio cuidadoso',
    text: 'Embalagem protegida para o incenso chegar inteiro e perfumado.',
    dot: aboutDot1,
    icon: aboutIcon1,
  },
  {
    id: 'qualidade',
    title: 'Qualidade artesanal',
    text: 'Ervas e resinas selecionadas, produzidas em pequenos lotes.',
    dot: aboutDot2,
    icon: aboutIcon2,
  },
  {
    id: 'compra',
    title: 'Compra segura',
    text: 'Finalize o pedido direto pelo WhatsApp, com atendimento humano.',
    dot: aboutDot3,
    icon: aboutIcon3,
  },
] as const

export const featuredProducts = [
  { id: 'f1', name: 'Ritual da manhã', priceInCents: 2490, image: feat1 },
  { id: 'f2', name: 'Resina e sálvia', priceInCents: 3190, image: feat2 },
  { id: 'f3', name: 'Caixa presente', priceInCents: 4590, image: cat3 },
  { id: 'f4', name: 'Kit iniciação', priceInCents: 3890, image: cat4 },
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
    image: blog1,
    href: '/sobre',
    large: true,
  },
  {
    id: 'b2',
    title: 'Resinas ou ervas: qual incenso escolher?',
    excerpt: 'Entenda as diferenças de aroma, fumaça e duração.',
    image: blog2,
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
