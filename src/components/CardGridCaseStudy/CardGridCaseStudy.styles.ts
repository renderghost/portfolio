import { mergeClasses } from '@/lib/utils/mergeClasses';

export const gridBase =
  'flex flex-col w-full ' +
  'sm:grid md:grid-cols-2 2xl:grid-cols-3 gap-24 sm:auto-rows-fr sm:h-full';

export function getGridStyles(className?: string): string {
  return mergeClasses(gridBase, className);
}
