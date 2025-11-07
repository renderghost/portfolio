import { Heading, Text } from '@/components/ui';
import { getFeaturedArticles } from '@/lib/data/getData';

export default async function ArticlesGrid() {
  const featuredArticles = await getFeaturedArticles();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featuredArticles.map((article) => (
        <a
          key={article.slug}
          href={article.articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full focus:outline-none focus:ring-2 focus:ring-bones-blue dark:focus:ring-bones-cyan focus:ring-offset-2 rounded"
        >
          <article className="h-full border-l-4 border-bones-blue dark:border-bones-cyan pl-6 py-4 transition duration-300 hover:pl-8 hover:bg-bones-blue/5 dark:hover:bg-bones-cyan/5 rounded">
            <Heading
              level={3}
              className="mb-2 group-hover:text-bones-blue dark:group-hover:text-bones-cyan transition-colors"
            >
              {article.title}
            </Heading>
            {article.subtitle && <Text>{article.subtitle}</Text>}
            <Text variant="small" className="text-bones-dimgray dark:text-bones-whitesmoke">
              Published in {article.publication} • {new Date(article.published).toLocaleDateString()}
            </Text>
          </article>
        </a>
      ))}
    </div>
  );
}
