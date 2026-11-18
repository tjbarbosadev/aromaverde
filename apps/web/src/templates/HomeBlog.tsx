import { Link } from 'react-router-dom'
import { blogPosts } from '../data/home'

export function HomeBlog() {
  const large = blogPosts.filter((p) => p.large)
  const small = blogPosts.filter((p) => !p.large)

  return (
    <section className="bg-surface px-6 py-16 md:px-10 md:py-24" aria-labelledby="blog-title">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-14">
        <h2 id="blog-title" className="font-display text-4xl font-normal text-ink md:text-6xl">
          Últimos rituais &amp; notícias
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {large.map((post) => (
            <Link key={post.id} to={post.href} className="group flex flex-col gap-5 no-underline">
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                {post.image ? (
                  <img
                    src={post.image}
                    alt=""
                    aria-hidden
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : null}
              </div>
              <h3 className="font-display text-3xl leading-tight text-ink">{post.title}</h3>
              <p className="font-body text-base text-smoke">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {small.map((post) => (
            <Link
              key={post.id}
              to={post.href}
              className="flex flex-col gap-2 border border-line bg-white p-6 no-underline transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
              <h3 className="font-display text-2xl leading-tight text-ink">{post.title}</h3>
              <p className="font-body text-base text-smoke">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
