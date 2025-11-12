import { ReactNode } from 'react';

export type ParagraphSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ParagraphProps {
  children: ReactNode;
  size?: ParagraphSize;
  className?: string;
}
