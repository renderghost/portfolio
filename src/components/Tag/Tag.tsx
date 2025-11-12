import { cn } from '@/lib/utils';
import React from 'react';
import { Paragraph } from '../Paragraph/Paragraph';
import { tagStyles } from './Tag.styles';
import { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({ label, className = '' }) => {
  return (
    <div className={cn(tagStyles.base, className)}>
      <Paragraph size="sm">{label}</Paragraph>
    </div>
  );
};
