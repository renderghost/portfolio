import { mergeClasses } from '@/lib/utils/mergeClasses';
import { COL_SPAN } from './SectionImage.constants';

export const gridWrapper =
  'grid grid-cols-3 2xl:grid-cols-4 gap-x-32 gap-y-32 w-full';

const imageColumnBase =
  'flex flex-col gap-16 items-start justify-self-stretch self-start';

export const imageWrapper = 'aspect-[56/32] w-full relative';

export const imageEl =
  'absolute inset-0 w-full h-full object-cover pointer-events-none';

export const captionStyles =
  'font-sans font-medium text-base leading-[28px] text-black w-full';

export function getColStyles(usecase: 'full' | '2/3' | '1/2'): string {
  return mergeClasses(imageColumnBase, COL_SPAN[usecase]);
}
