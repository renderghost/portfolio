import { ReactNode } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

export interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel; // Semantic HTML tag (h1-h6)
  size?: HeadingSize; // Visual size (sm, md, lg, xl, 2xl)
  className?: string;
}
