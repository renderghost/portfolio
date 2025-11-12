import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { cn } from '@/lib/utils';
import React from 'react';
import { cardFactStyles } from './CardFact.styles';
import { CardFactProps } from './CardFact.types';

export const CardFact: React.FC<CardFactProps> = ({ title, subtitle, className = '' }) => (
  <div className={cn(cardFactStyles.wrapper, className)}>
    <Heading level={3} size="lg">
      {title}
    </Heading>
    <Paragraph size="md">{subtitle}</Paragraph>
  </div>
);
