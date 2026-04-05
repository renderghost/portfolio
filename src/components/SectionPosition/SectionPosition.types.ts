import type { CardPositionProps } from '@/components/CardPosition/CardPosition.types';

export interface SectionPositionProps extends CardPositionProps {
  usecase?: 'full' | '2/3';
}
