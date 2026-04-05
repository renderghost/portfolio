import { CardCaseStudy } from '@/components/CardCaseStudy/CardCaseStudy';
import React from 'react';
import { getGridStyles } from './CardGridCaseStudy.styles';
import type { CardGridCaseStudyProps } from './CardGridCaseStudy.types';

export const CardGridCaseStudy: React.FC<CardGridCaseStudyProps> = ({
  cards,
  className,
}) => {
  return (
    <div className={getGridStyles(className)}>
      {cards.map((card, index) => (
        <CardCaseStudy key={index} {...card} />
      ))}
    </div>
  );
};
