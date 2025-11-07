import articles from '@/data/json/articles.json';

/**
 * Articles section component for the home page.
 *
 * @returns JSX element displaying featured articles
 */
export default function ArticlesSection(): JSX.Element {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-bones-black dark:text-bones-white">Featured Articles</h2>
        <a href="/articles" className="text-bones-blue hover:text-bones-mediumblue transition-colors">
          Read More Articles
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.slice(0, 4).map((article, index) => (
          <div key={article.key || index}>
            <a
              href={article.canonicalURL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <article className="h-full border-l-4 border-bones-blue dark:border-bones-cyan pl-6 py-4 transition duration-300 hover:pl-8 hover:bg-bones-blue/5 dark:hover:bg-bones-cyan/5">
                <h3 className="mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors font-semibold">
                  {article.title}
                </h3>
                {article.summary && <p className="mb-2 text-bones-gray dark:text-bones-gainsboro">{article.summary}</p>}
                <p className="text-sm text-bones-dimgray dark:text-bones-whitesmoke">
                  Published in {article.affiliationName} • {new Date(article.published).toLocaleDateString()}
                </p>
              </article>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
