import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  children: ReactNode;
  underline?: 'none' | 'hover' | 'always';
  underlinePosition?: 'left' | 'center' | 'right';
  color?: 'current' | 'blue';
}
