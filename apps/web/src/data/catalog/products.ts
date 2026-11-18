import type { Product } from '../../domain/catalog/types'
import { placeholder } from '../../lib/placeholder'

const care =
  'Acenda a ponta, sopre a chama e deixe a brasa. Use em superfície estável, longe de correntes de ar e materiais inflamáveis. Nunca deixe queimando sem supervisão. As propriedades descritas são simbólicas e aromáticas — não são efeitos medicinais.'

export const products: Product[] = [
  {
    id: 'raio-de-sol',
    slug: 'raio-de-sol',
    name: 'Raio de Sol',
    shortDescription: 'Rosa amarela & calêndula — floral, delicada e acolhedora.',
    story:
      'Uma combinação floral inspirada na luz e na energia do sol. A rosa amarela representa alegria, amizade, prosperidade e abertura; a calêndula complementa com vitalidade e proteção solar simbólica.',
    herbs: ['Rosa amarela', 'Calêndula'],
    careNotes: care,
    awakens: 'Alegria, acolhimento, vitalidade e positividade.',
    idealFor: 'Renovação, gratidão, boas intenções e harmonização do ambiente.',
    lineId: 'varetas',
    intentionIds: ['acolher', 'prosperidade'],
    priceInCents: 2890,
    currency: 'BRL',
    unitsPerPack: 5,
    images: [
      {
        src: placeholder(800, 1000, 'Raio+de+Sol'),
        alt: 'Caixa de incenso artesanal Raio de Sol — rosa amarela e calêndula',
      },
    ],
    available: true,
  },
  {
    id: 'brisa-serena',
    slug: 'brisa-serena',
    name: 'Brisa Serena',
    shortDescription: 'Lavanda & alecrim — serenidade e clareza.',
    story:
      'Une a delicadeza floral da lavanda ao frescor do alecrim. Convida a desacelerar e encontrar tranquilidade.',
    herbs: ['Lavanda', 'Alecrim'],
    careNotes: care,
    awakens: 'Serenidade, equilíbrio, leveza e clareza.',
    idealFor: 'Descanso, meditação, leitura e preparação para relaxar.',
    lineId: 'varetas',
    intentionIds: ['acolher', 'conectar'],
    priceInCents: 2890,
    currency: 'BRL',
    unitsPerPack: 5,
    images: [
      {
        src: placeholder(800, 1000, 'Brisa+Serena'),
        alt: 'Caixa de incenso artesanal Brisa Serena — lavanda e alecrim',
      },
    ],
    available: true,
  },
  {
    id: 'despertar-verde',
    slug: 'despertar-verde',
    name: 'Despertar Verde',
    shortDescription: 'Alecrim & eucalipto — frescor e disposição.',
    story:
      'Combinação herbal e marcante. Alecrim traz vitalidade e clareza; eucalipto remete à natureza e renovação.',
    herbs: ['Alecrim', 'Eucalipto'],
    careNotes: care,
    awakens: 'Disposição, frescor, renovação e vitalidade.',
    idealFor: 'Começar o dia, renovar o ambiente e concentração.',
    lineId: 'varetas',
    intentionIds: ['purificar', 'conectar'],
    priceInCents: 2790,
    currency: 'BRL',
    unitsPerPack: 5,
    images: [
      {
        src: placeholder(800, 1000, 'Despertar+Verde'),
        alt: 'Caixa de incenso artesanal Despertar Verde — alecrim e eucalipto',
      },
    ],
    available: true,
  },
  {
    id: 'chama-dourada',
    slug: 'chama-dourada',
    name: 'Chama Dourada',
    shortDescription: 'Canela & anis-estrelado — quente e envolvente.',
    story:
      'Canela associada à prosperidade e abundância; anis-estrelado à intuição e proteção simbólica.',
    herbs: ['Canela', 'Anis-estrelado'],
    careNotes: care,
    awakens: 'Prosperidade, confiança, acolhimento e expansão.',
    idealFor: 'Rituais de prosperidade, celebrações e renovação de objetivos.',
    lineId: 'varetas',
    intentionIds: ['prosperidade', 'acolher'],
    priceInCents: 2990,
    currency: 'BRL',
    unitsPerPack: 5,
    images: [
      {
        src: placeholder(800, 1000, 'Chama+Dourada'),
        alt: 'Caixa de incenso artesanal Chama Dourada — canela e anis-estrelado',
      },
    ],
    available: true,
  },
  {
    id: 'guarda-verde',
    slug: 'guarda-verde',
    name: 'Guarda Verde',
    shortDescription: 'Alecrim & arruda — proteção e limpeza simbólica.',
    story:
      'Identidade herbal forte, tradicionalmente relacionada à proteção e à limpeza energética dos ambientes.',
    herbs: ['Alecrim', 'Arruda'],
    careNotes: care,
    awakens: 'Proteção simbólica, força, renovação e sensação de limpeza.',
    idealFor: 'Defumação, renovação energética e preparação espiritual.',
    lineId: 'varetas',
    intentionIds: ['purificar'],
    priceInCents: 2890,
    currency: 'BRL',
    unitsPerPack: 5,
    images: [
      {
        src: placeholder(800, 1000, 'Guarda+Verde'),
        alt: 'Caixa de incenso artesanal Guarda Verde — alecrim e arruda',
      },
    ],
    available: true,
  },
  {
    id: 'forca-verde',
    slug: 'forca-verde',
    name: 'Força Verde',
    shortDescription: 'Alecrim solo — vitalidade e clareza.',
    story:
      'Celebra a simplicidade e a força de uma única planta: alecrim em sua personalidade herbal e marcante.',
    herbs: ['Alecrim'],
    careNotes: care,
    awakens: 'Vitalidade, clareza, disposição e renovação.',
    idealFor: 'Concentração, início de atividades e meditação.',
    lineId: 'varetas',
    intentionIds: ['conectar', 'purificar'],
    priceInCents: 2490,
    currency: 'BRL',
    unitsPerPack: 5,
    images: [
      {
        src: placeholder(800, 1000, 'Forca+Verde'),
        alt: 'Caixa de incenso artesanal Força Verde — alecrim',
      },
    ],
    available: true,
  },
  {
    id: 'fogo-manso',
    slug: 'fogo-manso',
    name: 'Fogo Manso',
    shortDescription: 'Bastão artesanal de ervas — visual e aromático.',
    story:
      'Une a massa do incenso às próprias ervas que envolvem sua composição. Ervas na estrutura e no acabamento externo.',
    herbs: ['Ervas da composição Aroma Verde'],
    careNotes: care,
    awakens: 'Conexão com a natureza, ancestralidade, renovação e intenção.',
    idealFor: 'Rituais de presença e contato com elementos naturais.',
    lineId: 'bastao',
    intentionIds: ['conectar', 'purificar'],
    priceInCents: 4590,
    currency: 'BRL',
    images: [
      {
        src: placeholder(800, 1000, 'Fogo+Manso'),
        alt: 'Bastão de ervas artesanal Fogo Manso Aroma Verde',
      },
    ],
    available: true,
  },
  {
    id: 'canelinhas',
    slug: 'canelinhas',
    name: 'Canelinhas',
    shortDescription: 'Um toque de prosperidade — canela artesanal.',
    story:
      'Criações inspiradas no simbolismo da canela: prosperidade, abundância, atração de oportunidades e realização.',
    herbs: ['Canela'],
    careNotes: care,
    awakens: 'Prosperidade, abundância, atração, movimento e realização.',
    idealFor: 'Intenções de abundância e movimentação de caminhos.',
    lineId: 'canelinhas',
    intentionIds: ['prosperidade'],
    priceInCents: 3290,
    currency: 'BRL',
    images: [
      {
        src: placeholder(800, 1000, 'Canelinhas'),
        alt: 'Canelinhas artesanais Aroma Verde',
      },
    ],
    available: true,
  },
  {
    id: 'palo-santo',
    slug: 'palo-santo',
    name: 'Palo Santo',
    shortDescription: 'Madeira sagrada — aroma amadeirado e suave.',
    story:
      'Tradicionalmente usado em práticas espirituais e defumação. Associado à purificação simbólica, proteção e conexão espiritual.',
    herbs: ['Palo Santo'],
    careNotes: care,
    awakens: 'Purificação, proteção, conexão espiritual, tranquilidade e renovação.',
    idealFor: 'Preparação de ambientes, introspecção e tranquilidade.',
    lineId: 'palo-santo',
    intentionIds: ['purificar', 'conectar'],
    priceInCents: 3990,
    currency: 'BRL',
    images: [
      {
        src: placeholder(800, 1000, 'Palo+Santo'),
        alt: 'Palo Santo Aroma Verde — madeira sagrada',
      },
    ],
    available: true,
  },
]
