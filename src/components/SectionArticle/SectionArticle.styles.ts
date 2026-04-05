import { mergeClasses } from '@/lib/utils/mergeClasses';
import { COL_STYLES } from './SectionArticle.constants';

export const gridWrapper =
  'grid grid-cols-3 gap-x-32 gap-y-32 w-full';

const columnBase =
  'flex flex-col gap-0 items-start';

export function getColStyles(usecase: 'full' | '2/3'): string {
  return mergeClasses(columnBase, COL_STYLES[usecase]);
}
