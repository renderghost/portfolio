import { usePageTheme } from '@/components/Layout/Layout';
import { cn } from '@/lib/utils';
import React from 'react';
import { divider } from './Divider.styles';

export const Divider: React.FC<{ className?: string }> = ({ className = '' }) => {
  const pageTheme = usePageTheme();

  // Theme-based divider colors:
  // Accent: white border
  // Default: black border in light mode, white in dark
  const themeClasses = pageTheme === 'accent'
    ? 'border-bones-white'
    : 'border-bones-black dark:border-bones-white';

  return <hr className={cn(divider, themeClasses, className)} />;
};
