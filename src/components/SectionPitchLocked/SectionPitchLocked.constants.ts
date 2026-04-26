import { mergeClasses } from '@/lib/utils/mergeClasses';

export const COL_SPAN: Record<'full' | 'large' | 'default' | 'small', string> = {
  full: 'col-span-4',
  large: 'col-span-4 lg:col-span-4 xl:col-span-3',
  default: 'col-span-4 lg:col-span-4 xl:col-span-3',
  small: 'col-span-4',
};

const columnBase =
  'flex flex-col gap-16 items-start justify-self-stretch self-start';

export function getColStyles(
  usecase: 'full' | 'large' | 'default' | 'small',
): string {
  return mergeClasses(columnBase, COL_SPAN[usecase]);
}
