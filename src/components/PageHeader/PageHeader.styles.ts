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

// Row 2: page title (and optional overline) full width below
export const titleBlock =
  'flex flex-col gap-8 items-start px-24 pb-16 w-full';

export const overlineStyles =
  'font-sans font-semibold text-base leading-[24px] ' +
  'text-dimgray uppercase tracking-[6.2px]';

export const pageTitleStyles =
  'font-sans font-black text-[40px] leading-[48px] text-black whitespace-nowrap';

export function getWrapperStyles(className?: string): string {
  return mergeClasses(wrapperBase, className);
}