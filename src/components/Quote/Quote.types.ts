import { ReactNode } from 'react';

export type QuoteSize = 'md' | 'lg' | 'xl';

export interface QuoteProps {
  children: ReactNode;
  size?: QuoteSize;
  cite?: string; // Optional citation URL
  className?: string;
}
