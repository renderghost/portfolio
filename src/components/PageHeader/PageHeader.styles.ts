import { mergeClasses } from '@/lib/utils/mergeClasses';

export const wrapperBase = 'flex flex-col w-full max-w-[1920px]';

// Top row: EXIT link left, social nav right.
export const navRow =
  'flex items-center justify-between px-24 py-16 w-full';

export const navLinksGroup = 'flex gap-16 items-center';

// Title block below the nav row.
export const titleBlock = 'flex items-start px-24 py-16 w-full';

export const titleColumn = 'flex flex-col items-start justify-center';

export const overlineStyles =
  'font-sans font-semibold text-base leading-[24px] ' +
  'text-dimgray uppercase tracking-[6.2px]';

export const pageTitleStyles =
  'font-sans font-black text-[40px] leading-[48px] text-black';

export function getWrapperStyles(className?: string): string {
  return mergeClasses(wrapperBase, className);
}