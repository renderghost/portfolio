import { mergeClasses } from '@/lib/utils/mergeClasses';
import { COL_SPAN } from './SectionQuote.constants';

export const gridWrapper =
  'grid grid-cols-3 2xl:grid-cols-4 gap-x-32 gap-y-32 w-full';

const quoteColumnBase =
  'flex flex-col gap-32 items-start justify-self-stretch self-start ' +
  'border-l-2 border-blue pl-32';

export const quoteLgStyles =
  'font-mono italic font-regular text-[32px] leading-[40px] text-black';

export const quoteXlStyles =
  'font-mono italic font-regular text-[48px] leading-[56px] text-black';

export const attributionRow = 'flex items-baseline gap-4';

export const attributionStyles =
  'font-sans font-medium text-[24px] leading-[36px] text-black';

export function getColStyles(usecase: 'full' | '2/3'): string {
  return mergeClasses(quoteColumnBase, COL_SPAN[usecase]);
}

export function getQuoteStyles(size: 'lg' | 'xl'): string {
  return size === 'xl' ? quoteXlStyles : quoteLgStyles;
}
