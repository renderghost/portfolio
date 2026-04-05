import { mergeClasses } from '@/lib/utils/mergeClasses';

export const wrapperBase = 'flex flex-col lg:flex-row w-full max-w-[1920px]';

export const copyrightStyles =
  'font-sans font-medium text-base leading-[28px] text-white whitespace-nowrap';

// Copyright: bottom on mobile (order-3), left on desktop (order-1)
export const copyrightBlock =
  'flex items-center lg:items-end px-24 py-16 w-full lg:flex-1 lg:self-stretch ' +
  'order-3 lg:order-1';

// Legal links: middle on both (order-2)
export const legalBlock =
  'flex gap-16 items-center lg:items-start px-24 py-16 w-full lg:flex-1 lg:self-stretch ' +
  'order-2 lg:order-2';

// Social links: top on mobile (order-1), right on desktop (order-3)
export const socialBlock =
  'flex gap-16 flex-wrap items-center px-24 py-16 w-full lg:flex-1 lg:justify-end ' +
  'order-1 lg:order-3';

export function getWrapperStyles(className?: string): string {
  return mergeClasses(wrapperBase, className);
}