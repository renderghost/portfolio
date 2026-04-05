import { CardArticle } from '@/components/CardArticle/CardArticle';
import React from 'react';
import { getGridStyles } from './CardGridArticle.styles';
import type { CardGridArticleProps } from './CardGridArticle.types';

export const CardGridArticle: React.FC<CardGridArticleProps> = ({ cards, className }) => {
  return (
    <div className={getGridStyles(className)}>
      {cards.map((card, index) => (
        <CardArticle key={index} {...card} />
      ))}
    </div>
  );
};
