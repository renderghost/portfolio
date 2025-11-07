import { cn } from '@/lib/utils';

export const getCardWrapperStyles = (onClick?: () => void, className?: string) =>
  cn(
    'group relative flex flex-col bg-white dark:bg-neutral-800 rounded-lg overflow-hidden transition-all',
    onClick && 'cursor-pointer hover:shadow-lg',
    className,
  );

export const coverImageContainer =
  'relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-700';

export const coverImage = 'object-cover w-full h-full transition-transform group-hover:scale-105';

export const contentContainer = 'flex flex-col gap-4 p-6';

export const badgeMetaContainer = 'flex items-center justify-between gap-4';

export const getBadgeStyles = (variant: 'primary' | 'secondary' = 'primary') =>
  cn(
    'inline-flex px-3 py-1 text-sm font-medium rounded-full',
    variant === 'primary'
      ? 'bg-brand-100 text-brand-900 dark:bg-brand-800 dark:text-brand-100'
      : 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100',
  );

export const metaContainer = 'flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400';
