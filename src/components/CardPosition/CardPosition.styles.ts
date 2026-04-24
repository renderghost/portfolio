import { mergeClasses } from '@/lib/utils/mergeClasses';

const cardBase = 'flex flex-col gap-16 items-start p-32 w-full';

export function getCardWrapper(isCurrent: boolean): string {
  return mergeClasses(cardBase, isCurrent ? 'bg-white' : 'bg-black-06');
}

export const titleRow =
  'flex items-start justify-between w-full gap-16';

export const titleStyles =
  'font-sans font-black text-[24px] leading-[32px] text-black';

export const currentBadge =
  'bg-yellow px-8 font-sans font-medium text-base leading-[28px] text-black whitespace-nowrap shrink-0';

export const metaRow =
  'flex items-center justify-between w-full';

export const metaLeft =
  'flex gap-8 items-center font-sans font-medium text-base leading-[28px] text-black whitespace-nowrap';

export const metaRight =
  'flex gap-1 items-center font-sans font-medium text-base leading-[28px] text-black whitespace-nowrap';
