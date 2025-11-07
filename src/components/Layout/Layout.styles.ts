import { cn } from '@/lib/utils';
import { PageTheme } from './Layout.types';

export const getLayoutStyles = (theme: PageTheme = 'default') =>
  cn(
    'grid grid-cols-1 md:grid-cols-3 min-h-screen gap-0',
    // Accent theme: blue (light) / mediumblue (dark), white text
    theme === 'accent' && 'bg-bones-blue dark:bg-bones-mediumblue text-bones-white',
    // Default theme: white (light) / black (dark), black/white text
    theme === 'default' && 'bg-bones-white dark:bg-bones-black text-bones-black dark:text-bones-white',
  );

export const main = 'md:col-span-2 p-12 md:order-1';

export const getAsideStyles = (theme: PageTheme = 'default') =>
  cn(
    'md:col-span-1 p-12 md:order-2',
    // Accent theme: white border with transparency
    theme === 'accent' && 'border-l border-bones-white-20',
    // Default theme: black/white borders based on mode
    theme === 'default' && 'border-l border-bones-black-20 dark:border-bones-white-20',
  );
