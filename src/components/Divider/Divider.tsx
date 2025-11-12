import { usePageTheme } from '@/components/Layout/Layout';
import { cn } from '@/lib/utils';
import React from 'react';
import { dividerHorizontal, dividerVertical } from './Divider.styles';
import { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({ className = '', orientation = 'horizontal' }) => {
  const pageTheme = usePageTheme();

  // Theme-based divider colors:
  // Accent: white border
  // Default: black border in light mode, white in dark
  const themeClasses =
    pageTheme === 'accent' ? 'border-bones-white' : 'border-bones-black-20 dark:border-bones-white-20';

  const orientationStyles = orientation === 'vertical' ? dividerVertical : dividerHorizontal;

  return <hr className={cn(orientationStyles, themeClasses, className)} />;
};
