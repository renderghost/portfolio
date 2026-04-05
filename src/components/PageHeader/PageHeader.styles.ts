import { mergeClasses } from '@/lib/utils/mergeClasses';

export const wrapperBase =
  'flex flex-col lg:flex-row lg:items-start w-full max-w-[1920px] lg:min-h-[120px]';

// Mobile-only: EXIT link row (top of vertical stack)
export const exitRow =
  'flex lg:hidden items-center px-24 py-16 w-full order-1';

// Title block: order-2 on mobile (below EXIT), order-1 on desktop (left)
export const titleBlock =
  'flex flex-col gap-16 items-start px-24 py-16 ' +
  'order-2 lg:order-1 lg:flex-1';

// Nav: hidden on mobile, visible on desktop (right, order-2)
export const navColumn =
  'hidden lg:flex flex-1 items-start justify-end px-24 py-16 order-1 lg:order-2';

export const navGroup = 'flex gap-24 items-start';

export const overlineStyles =
  'font-sans font-semibold text-base leading-[24px] ' +
  'text-dimgray uppercase tracking-[6.2px]';

export const pageTitleStyles =
  'font-sans font-black text-[40px] leading-[48px] text-black whitespace-nowrap';

export function getWrapperStyles(className?: string): string {
  return mergeClasses(wrapperBase, className);
}