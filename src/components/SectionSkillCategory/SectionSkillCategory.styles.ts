import { mergeClasses } from '@/lib/utils/mergeClasses';
import { COL_SPAN } from './SectionSkillCategory.constants';

export const gridWrapper =
  'grid grid-cols-4 gap-x-32 gap-y-32 w-full';

const columnBase =
  'flex flex-col gap-16 items-start justify-self-stretch self-start';

export function getColStyles(usecase: 'full' | 'large' | 'default' | 'small'): string {
  return mergeClasses(columnBase, COL_SPAN[usecase]);
}
