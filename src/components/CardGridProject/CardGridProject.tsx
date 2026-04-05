import { CardProject } from '@/components/CardProject/CardProject';
import React from 'react';
import { getGridStyles } from './CardGridProject.styles';
import type { CardGridProjectProps } from './CardGridProject.types';

export const CardGridProject: React.FC<CardGridProjectProps> = ({
  cards,
  className,
}) => {
  return (
    <div className={getGridStyles(className)}>
      {cards.map((card, index) => (
        <CardProject key={index} {...card} />
      ))}
    </div>
  );
};
