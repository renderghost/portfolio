import { Card } from '@/components/Card/Card';
import React from 'react';
import * as styles from './CardArticle.styles';
import { BADGE_VARIANT, DATE_FORMAT_OPTIONS } from './CardArticle.constants';
import { CardArticleProps } from './CardArticle.types';

export const CardArticle: React.FC<CardArticleProps> = ({ article }) => {
  return (
    <a href={article.articleUrl} target="_blank" rel="noopener noreferrer">
      <Card
        coverImage={article.coverImage}
        badge={{
          label: article.publication,
          variant: BADGE_VARIANT,
        }}
        meta={{
          company: article.publication,
          date: new Date(article.published).toLocaleDateString('en-US', DATE_FORMAT_OPTIONS),
        }}
        title={article.title}
        description={article.subtitle}
        className={styles.cardWrapper}
      />
    </a>
  );
};
