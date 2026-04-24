import { CardArticle } from '@/components/CardArticle/CardArticle';
import React from 'react';
import { contentWrapper, gridWrapper } from './SectionArticle.styles';
import type { SectionArticleProps } from './SectionArticle.types';

export const SectionArticle: React.FC<SectionArticleProps> = (props) => {
  return (
    <div className={gridWrapper}>
      <div className={contentWrapper}>
        <CardArticle {...props} />
      </div>
    </div>
  );
};
