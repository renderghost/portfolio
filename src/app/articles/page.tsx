import type { Metadata } from 'next'
import { getArticles } from '@/lib/data/getData'

export const metadata: Metadata = {
  title: 'Articles | Barry Prendergast',
  description: 'Articles and writings about UX design, frontend development, and digital product design.',
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  // Sort articles by publication date, most recent first
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  )

  // Get unique publications for filtering
  const publications = Array.from(
    new Set(articles.map((article) => article.publication))
  )

  return (
    <main className="min-h-screen bg-bones-white dark:bg-bones-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-bones-black dark:text-bones-white mb-4">
            Articles
          </h1>
          <p className="text-xl text-bones-dimgray dark:text-bones-whitesmoke">
            Thoughts and insights on design, development, and digital products.
          </p>
        </section>

        {/* Publications Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-4">
            {publications.map((publication) => (
              <span
                key={publication}
                className="bg-bones-whitesmoke dark:bg-bones-dimgray px-4 py-2 rounded-full text-sm text-bones-dimgray dark:text-bones-whitesmoke cursor-pointer hover:bg-bones-blue/10 hover:text-bones-blue dark:hover:bg-bones-blue/20 dark:hover:text-bones-cyan transition-colors"
              >
                {publication}
              </span>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedArticles.map((article) => (
              <article 
                key={article.slug}
                className="group relative bg-bones-whitesmoke dark:bg-bones-dimgray rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-transform"
              >
                {article.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-serif text-bones-black dark:text-bones-white mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors">
                    {article.title}
                  </h2>
                  {article.subtitle && (
                    <p className="text-bones-dimgray dark:text-bones-whitesmoke mb-4">
                      {article.subtitle}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-bones-slategray dark:text-bones-whitesmoke">
                      {new Date(article.published).toLocaleDateString()}
                    </span>
                    <span className="text-sm font-medium text-bones-blue dark:text-bones-cyan">
                      {article.publication}
                    </span>
                  </div>
                  <a
                    href={article.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label={`Read ${article.title}`}
                  >
                    <span className="sr-only">Read article</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

