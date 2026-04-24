import type { CardPositionProps } from '@/components/CardPosition/CardPosition.types';

export type CardListPositionVariant = 'current' | 'past';

export interface CardListPositionProps {
  title: string;
  variant: CardListPositionVariant;
  positions: CardPositionProps[];
  linkedinUrl?: string;
}
