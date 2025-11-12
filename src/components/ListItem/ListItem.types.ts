import { ReactNode } from 'react';

export type ListItemSize = 'sm' | 'md' | 'lg';

export interface ListItemProps {
  children: ReactNode;
  size?: ListItemSize;
  className?: string;
}
