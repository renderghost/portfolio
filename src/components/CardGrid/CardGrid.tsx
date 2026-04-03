import React from 'react';
import { CardHome } from '@/components/CardHome/CardHome';
import { getGridStyles } from './CardGrid.styles';
import type { CardGridProps } from './CardGrid.types';

export const CardGrid: React.FC<CardGridProps> = ({ cards, className }) => {
  return (
    <div className={getGridStyles(className)}>
      {cards.map((card, index) => (
        <CardHome
          key={index}
          {...card}
        />
      ))}
    </div>
  );
};