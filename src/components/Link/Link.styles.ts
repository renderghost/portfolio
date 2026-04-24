import { mergeClasses } from '@/lib/utils/mergeClasses';
import type { LinkColor, LinkSize } from './Link.types';

const wrapperBase =
  'group inline-flex items-center gap-8 font-sans ' +
  'focus-visible:outline focus-visible:outline-4   focus-visible:outline-yellow  focus-visible:outline-offset-4';

const colorStyles: Record<LinkColor, string> = {
  blue: 'text-mediumblue hover:text-blue focus-visible:text-blue',
  white: 'text-whitesmoke hover:text-white focus-visible:text-white',
  black: 'text-dimgray hover:text-black focus-visible:text-black',
};

const sizeStyles: Record<LinkSize, string> = {
  base: 'text-base font-bold',
  large: 'text-2xl font-semibold',
};

export function getLinkStyles(
  color: LinkColor,
  size: LinkSize,
  className?: string,
): string {
  return mergeClasses(wrapperBase, colorStyles[color], sizeStyles[size], className);
}

export const labelStyles =
  'underline decoration-dotted underline-offset-4 ' +
  'group-hover:decoration-solid ' +
  'group-focus-visible:decoration-solid ' +
  'shrink-0 overflow-hidden text-ellipsis whitespace-nowrap';

export const iconStyles = 'shrink-0';
