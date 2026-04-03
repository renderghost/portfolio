import { mergeClasses } from '@/lib/utils/mergeClasses';

export const cardBase = 'flex flex-col gap-16 items-start p-24 ' + 'w-full min-w-[400px] h-full';

export const overlineStyles =
  'font-sans font-semibold text-base leading-[24px] ' +
  'text-white uppercase tracking-[2px] whitespace-nowrap shrink-0';

export const titleStyles: Record<'default' | 'hero', string> = {
  default: 'font-sans font-black text-3xl leading-[40px] text-white w-full shrink-0',
  hero: 'font-sans font-black text-3xl leading-[40px] text-white w-full shrink-0',
};

export const descriptionStyles = 'font-sans font-medium text-base leading-[28px] text-white w-full shrink-0';

export function getCardStyles(className?: string): string {
  return mergeClasses(cardBase, className);
}

export function getTitleStyles(isHero: boolean): string {
  return titleStyles[isHero ? 'hero' : 'default'];
}
