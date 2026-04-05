import type { CardArticleProps } from '@/components/CardArticle/CardArticle.types';

export interface SectionArticleProps extends CardArticleProps {
  usecase?: 'full' | '2/3';
}
