import { mergeClasses } from '@/lib/utils/mergeClasses';

export const wrapperBase = 'grid grid-cols-1 w-full max-w-[1920px] ' + 'md:grid-cols-[1fr_1fr] md:h-[120px]';

export const identityBlock = 'flex items-start px-24 py-16 w-full ' + 'md:h-full';

export const navBlock =
  'flex flex-wrap gap-16 items-start justify-start px-24 py-16 w-full ' + 'md:h-full md:justify-end';

export const identityColumn = 'flex flex-col items-start justify-center ' + 'whitespace-nowrap';

export const nameStyles = 'font-sans font-black text-xl  text-white shrink-0';

export const roleStyles = 'font-sans font-semibold text-base text-whitesmoke shrink-0';

export function getWrapperStyles(className?: string): string {
  return mergeClasses(wrapperBase, className);
}
