import { Hero } from '../templates/Hero'
import { HomeContact } from '../templates/HomeContact'
import { HomeEssence } from '../templates/HomeEssence'
import { HomeFeatured } from '../templates/HomeFeatured'
import { HomeProductLines } from '../templates/HomeProductLines'
import { HomeStoryTeaser } from '../templates/HomeStoryTeaser'

/**
 * Home alinhada ao doc da marca (§9):
 * Início → produtos → essência → história → contato.
 * Sem blog, newsletter, parceiros ou depoimentos.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <HomeProductLines />
      <HomeFeatured />
      <HomeEssence />
      <HomeStoryTeaser />
      <HomeContact />
    </>
  )
}
