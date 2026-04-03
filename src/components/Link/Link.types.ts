export type LinkSize = 'base' | 'medium';
export type LinkUsecase = 'default' | 'mono' | 'on contrast';

export interface LinkProps {
  href: string;
  label: string;
  size?: LinkSize;
  usecase?: LinkUsecase;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  iconLeft?: string;
  iconRight?: string;
  className?: string;
}
