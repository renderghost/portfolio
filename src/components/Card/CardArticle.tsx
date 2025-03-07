import { Card } from '@/components/Card/Card';
import React from 'react';

interface CardArticleProps {
  article: {
    title: string;
    subtitle: string;
    coverImage: string;
    articleUrl: string;
    publication: string;
    published: string;
  };
}

export const CardArticle: React.FC<CardArticleProps> = ({ article }) => {
  return (
    <a href={article.articleUrl} target="_blank" rel="noopener noreferrer">
      <Card
        coverImage={article.coverImage}
        badge={{
          label: article.publication,
          variant: 'primary',
        }}
        meta={{
          company: article.publication,
          date: new Date(article.published).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }),
        }}
        title={article.title}
        description={article.subtitle}
        className="group cursor-pointer transition-all hover:-translate-y-1"
      />
    </a>
  );
};
