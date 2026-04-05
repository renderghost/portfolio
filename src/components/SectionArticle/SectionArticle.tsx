import { CardArticle } from '@/components/CardArticle/CardArticle';
import React from 'react';
import { getColStyles, gridWrapper } from './SectionArticle.styles';
import type { SectionArticleProps } from './SectionArticle.types';

export const SectionArticle: React.FC<SectionArticleProps> = ({
  usecase = '2/3',
  ...cardProps
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <CardArticle {...cardProps} />
      </div>
    </div>
  );
};
