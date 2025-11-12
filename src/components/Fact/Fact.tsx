import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { cn } from '@/lib/utils';
import React from 'react';
import { factStyles } from './Fact.styles';
import { FactProps } from './Fact.types';

export const Fact: React.FC<FactProps> = ({ title, subtitle, className = '' }) => (
  <div className={cn(factStyles.wrapper, className)}>
    <Heading level={3} size="md">
      {title}
    </Heading>
    <Paragraph size="md">{subtitle}</Paragraph>
  </div>
);
