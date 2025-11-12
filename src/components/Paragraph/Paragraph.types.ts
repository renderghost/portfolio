import { ReactNode } from 'react';

export type ParagraphSize = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

export interface ParagraphProps {
  children: ReactNode;
  size?: ParagraphSize;
  className?: string;
}
