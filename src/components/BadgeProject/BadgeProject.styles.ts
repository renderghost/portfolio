import { mergeClasses } from '@/lib/utils/mergeClasses';
import type { BadgeProjectVariant } from './BadgeProject.types';

const base =
  'inline-flex items-center px-8 py-4 font-sans font-semibold ' +
  'text-[12px] leading-[16px] tracking-[0.5px] uppercase whitespace-nowrap';

const variantStyles: Record<BadgeProjectVariant, string> = {
  role: 'bg-black text-white',
  artwork: 'bg-black-10 text-black',
  status: 'bg-black-10 text-black',
};

export function getBadgeStyles(variant: BadgeProjectVariant): string {
  return mergeClasses(base, variantStyles[variant]);
}
