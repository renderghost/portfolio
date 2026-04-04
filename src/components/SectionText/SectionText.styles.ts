import { mergeClasses } from '@/lib/utils/mergeClasses';
import { COL_SPAN } from './SectionText.constants';

export const gridWrapper = 'grid grid-cols-3 2xl:grid-cols-4 gap-x-32 gap-y-32 w-full';

const textColumnBase = 'flex flex-col gap-16 items-start justify-self-stretch self-start';

export const headingMdStyles =
  'font-sans font-black text-[24px] leading-[32px] text-black ' + 'overflow-hidden text-ellipsis';

export const headingLgStyles =
  'font-sans font-black text-[32px] leading-[40px] text-black ' + 'overflow-hidden text-ellipsis';

export const bodyStyles = 'font-sans font-medium text-base leading-[28px] text-black';

export function getColStyles(usecase: 'full' | '2/3'): string {
  return mergeClasses(textColumnBase, COL_SPAN[usecase]);
}

export function getHeadingStyles(size: 'md' | 'lg'): string {
  return size === 'lg' ? headingLgStyles : headingMdStyles;
}
