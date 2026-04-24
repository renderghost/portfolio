import { mergeClasses } from '@/lib/utils/mergeClasses';

// Single column on mobile, 3-column grid from sm (640px) up.
// h-full ensures auto-rows-fr has a defined height to distribute into.
export const gridBase = 'flex flex-col w-full sm:grid md:grid-cols-2 2xl:grid-cols-3 gap-24';

export function getGridStyles(className?: string): string {
  return mergeClasses(gridBase, className);
}
