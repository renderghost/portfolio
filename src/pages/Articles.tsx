// src/pages/Articles.tsx

import { CardArticle } from '@/components/Card/CardArticle';
import { Heading } from '@/components/Typography/Heading/Heading';
import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  subtitle: string;
  coverImage: string;
  articleUrl: string;
  publication: string;
  published: string;
  featured: boolean;
}

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Importing the JSON file dynamically
    import('@/data/json/articles.json').then((data) => {
      setArticles(data.default);
    });
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <Heading level={1}>Articles</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <CardArticle key={index} article={article} />
        ))}
      </div>
    </main>
  );
};

export default ArticlesPage;
