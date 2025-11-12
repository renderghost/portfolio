import { ReactNode } from 'react';

export type SpanSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface SpanProps {
  children: ReactNode;
  size?: SpanSize;
  className?: string;
}
