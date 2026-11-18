import { Hero } from '../templates/Hero'
import { HomeAbout } from '../templates/HomeAbout'
import { HomeBlog } from '../templates/HomeBlog'
import { HomeCategories } from '../templates/HomeCategories'
import { HomeFeatured } from '../templates/HomeFeatured'
import { HomeNewsletter } from '../templates/HomeNewsletter'
import { HomePartners } from '../templates/HomePartners'
import { HomeTestimonials } from '../templates/HomeTestimonials'

export function HomePage() {
  // Seo entra na A8.
  return (
    <>
      <Hero />
      <HomePartners />
      <HomeCategories />
      <HomeAbout />
      <HomeFeatured />
      <HomeTestimonials />
      <HomeBlog />
      <HomeNewsletter />
    </>
  )
}
