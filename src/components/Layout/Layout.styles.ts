import { cn } from '@/lib/utils';
import { PageTheme } from './Layout.types';

export const getLayoutStyles = (theme: PageTheme = 'default') =>
  cn(
    'grid grid-cols-1 md:grid-cols-[2fr_auto_1fr] min-h-screen gap-0',
    // Accent theme: blue (light) / mediumblue (dark), white text
    theme === 'accent' && 'bg-bones-blue dark:bg-bones-mediumblue text-bones-white',
    // Default theme: white (light) / black (dark), black/white text
    theme === 'default' && 'bg-bones-white dark:bg-bones-black text-bones-black dark:text-bones-white',
  );

export const main = 'p-12';

export const getAsideStyles = (theme: PageTheme = 'default') =>
  cn(
    'p-12',
    // Theme-specific styles (border removed - now using Divider component)
  );
