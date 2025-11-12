import { ReactNode } from 'react';

export type MarkSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface MarkProps {
  children: ReactNode;
  size?: MarkSize;
  className?: string;
}
