import { mergeClasses } from '@/lib/utils/mergeClasses';
import { COL_SPAN } from './SectionPosition.constants';

export const gridWrapper =
  'grid grid-cols-3 2xl:grid-cols-4 gap-x-32 gap-y-32 w-full';

const columnBase = 'flex flex-col gap-16 items-start justify-self-stretch self-start';

export function getColStyles(usecase: 'full' | '2/3'): string {
  return mergeClasses(columnBase, COL_SPAN[usecase]);
}
