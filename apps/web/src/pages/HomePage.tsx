import { Hero } from '../templates/Hero'
import { HomeCategories } from '../templates/HomeCategories'
import { HomeNewsletter } from '../templates/HomeNewsletter'

export function HomePage() {
  // Seo entra na A8.
  return (
    <>
      <Hero />
      <HomeCategories />
      <HomeNewsletter />
    </>
  )
}
