import { Link } from 'react-router-dom'
import { Heading, Text } from '@aromaverde/ui'
import { blogPosts } from '../data/home'

export function HomeBlog() {
  const large = blogPosts.filter((p) => p.large)
  const small = blogPosts.filter((p) => !p.large)

  return (
    <section
      className="bg-surface px-12 py-14 md:py-20"
      aria-labelledby="blog-title"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:gap-12">
        <Heading
          level={2}
          id="blog-title"
          className="text-4xl font-normal md:text-5xl"
        >
          Últimos rituais &amp; notícias
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          {large.map((post) => (
            <Link
              key={post.id}
              to={post.href}
              className="group flex flex-col gap-5 no-underline"
            >
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
              <Heading level={3} className="text-3xl font-normal leading-tight">
                {post.title}
              </Heading>
              <Text tone="smoke">{post.excerpt}</Text>
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {small.map((post) => (
            <Link
              key={post.id}
              to={post.href}
              className="flex flex-col gap-2 border border-line bg-white p-6 no-underline"
            >
              <Heading level={3} className="text-2xl font-normal leading-tight">
                {post.title}
              </Heading>
              <Text tone="smoke">{post.excerpt}</Text>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
