import { mergeClasses } from '@/lib/utils/mergeClasses';

export const COL_SPAN: Record<'full' | 'large' | 'default' | 'small', string> = {
  full: 'col-span-4',
  large: 'col-span-4 lg:col-span-3 xl:col-span-2',
  default: 'col-span-4 lg:col-span-3 xl:col-span-2',
  small: 'col-span-4 md:col-span-1',
};

const columnBase =
  'flex flex-col gap-16 items-start justify-self-stretch self-start';

export function getColStyles(usecase: 'full' | 'large' | 'default' | 'small'): string {
  return mergeClasses(columnBase, COL_SPAN[usecase]);
}

export function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatYear(dateStr: string): string {
  return String(new Date(dateStr).getFullYear());
}
