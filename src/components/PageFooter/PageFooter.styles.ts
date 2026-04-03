import { mergeClasses } from '@/lib/utils/mergeClasses';

export const wrapperBase =
  'grid grid-cols-1 w-full max-w-[1920px] ' +
  'md:grid-cols-[1fr_1fr] md:h-[60px]';

export const creditBlock =
  'flex items-start px-24 py-16 w-full order-2 ' + 'md:h-full md:order-1';

export const copyrightStyles =
  'font-sans font-medium text-base leading-[28px] text-black whitespace-nowrap';

export const legalBlock =
  'flex flex-wrap gap-16 items-start justify-start px-24 py-16 w-full order-1 ' +
  'md:h-full md:order-2 md:justify-end';

export function getWrapperStyles(className?: string): string {
  return mergeClasses(wrapperBase, className);
}