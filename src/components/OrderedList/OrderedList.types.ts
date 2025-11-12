import { ReactNode } from 'react';

export type NumberStyle = 'decimal' | 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman';

export interface OrderedListProps {
  children: ReactNode;
  numberStyle?: NumberStyle;
  className?: string;
}
