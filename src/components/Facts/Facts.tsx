import { cn } from '@/lib/utils';
import React from 'react';
import { CardFact } from '@/components/CardFact/CardFact';
import { factsStyles } from './Facts.styles';
import { FactsProps } from './Facts.types';

export const Facts: React.FC<FactsProps> = ({ items, className = '' }) => {
  return (
    <div className={cn(factsStyles.wrapper, className)}>
      {items.map((item) => (
        <CardFact key={item.title} title={item.title} subtitle={item.subtitle} />
      ))}
    </div>
  );
};
