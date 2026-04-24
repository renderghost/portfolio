import { mergeClasses } from '@/lib/utils/mergeClasses';

export const wrapperBase =
  'flex flex-col w-full max-w-[1920px]';

// Row 1: stacked on mobile (nav→breadcrumb), side-by-side on desktop (breadcrumb←→nav)
export const topRow =
  'flex flex-col gap-16 px-24 py-16 w-full md:flex-row md:items-center md:justify-between md:gap-0';

export const navGroup =
  'flex flex-wrap gap-24 items-center md:order-2';

export const breadcrumbGroup = 'flex items-center gap-8 md:order-1';

export const breadcrumbSeparator =
  'font-sans font-medium text-base leading-[28px] text-dimgray select-none';


export function getWrapperStyles(className?: string): string {
  return mergeClasses(wrapperBase, className);
}