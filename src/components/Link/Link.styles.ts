import { mergeClasses } from '@/lib/utils/mergeClasses';
import type { LinkSize, LinkUsecase } from './Link.types';

const wrapperBase =
  'group inline-flex items-center gap-8 rounded-softer font-sans ' + 'focus-visible:outline-none focus-visible:ring-2';

const sizeStyles: Record<LinkSize, string> = {
  base: 'text-base leading-[28px]',
  medium: 'text-2xl leading-[36px]',
};

const usecaseStyles: Record<LinkUsecase, string> = {
  default: 'text-medlumblue hover:text-blue focus-visible:ring-gold',
  mono: 'text-black hover:text-dimgray focus-visible:ring-gold',
  'on contrast': 'text-whitesmoke hover:text-white focus-visible:ring-gold',
};

const labelWeightStyles: Record<LinkSize, string> = {
  base: 'font-bold',
  medium: 'font-semibold',
};

export function getLinkStyles(size: LinkSize, usecase: LinkUsecase, className?: string): string {
  return mergeClasses(wrapperBase, sizeStyles[size], usecaseStyles[usecase], className);
}

export function getLabelStyles(size: LinkSize): string {
  return mergeClasses(
    'underline decoration-dotted group-hover:decoration-solid' +
      'shrink-0 overflow-hidden text-ellipsis whitespace-nowrap',
    labelWeightStyles[size],
  );
}

export const iconStyles = 'shrink-0 font-medium';
