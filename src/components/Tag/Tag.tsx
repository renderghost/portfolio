import { usePageTheme } from '@/components/Layout/Layout';
import { cn } from '@/lib/utils';
import React from 'react';
import { Paragraph } from '../Paragraph/Paragraph';
import { tagStyles } from './Tag.styles';
import { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({ label, className = '' }) => {
  const pageTheme = usePageTheme();

  // Theme-based tag styling:
  // Accent: white border with semi-transparent white background
  // Default: light backgrounds with dark/light text based on mode
  const themeClasses = pageTheme === 'accent'
    ? 'border border-bones-white bg-bones-white-20 text-bones-white'
    : 'bg-bones-black-5 text-bones-black dark:bg-bones-white-10 dark:text-bones-white';

  return (
    <div className={cn(tagStyles.base, themeClasses, className)}>
      <Paragraph size="sm">{label}</Paragraph>
    </div>
  );
};
