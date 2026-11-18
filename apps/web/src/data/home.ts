import { products } from './catalog/products'
import { productLines } from './catalog/lines'

/** Destaques da Home — primeiros produtos do catálogo da marca. */
export const featuredProducts = products.slice(0, 4).map((p) => ({
  id: p.id,
  name: p.name,
  priceInCents: p.priceInCents,
  image: p.images[0]?.src ?? '',
  href: `/produto/${p.slug}`,
  alt: p.images[0]?.alt ?? p.name,
}))

export { productLines }

export const essence = {
  title: 'Nossa essência',
  text: 'A Aroma Verde une natureza, espiritualidade, criatividade e trabalho manual. Cada combinação acompanha conexão interior, relaxamento, rituais e autocuidado.',
}

export const storyTeaser = {
  title: 'Nossa história',
  text: 'Nasce do amor pelas ervas e pela conexão com a natureza — raízes familiares, formação em incensos e produção artesanal, um a um, à mão.',
  href: '/sobre',
  cta: 'Conhecer a história',
}

export const heroImage = {
  src: 'https://placehold.co/750x500/e8ebe4/2d4a3e?text=Aroma+Verde',
  alt: 'Incensos artesanais Aroma Verde — ervas e rituais feitos à mão.',
}
