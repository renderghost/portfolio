import { ReactNode } from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4;
export type HeadingStyle = 'page' | 'section' | 'body' | 'billboard' | 'footnote' | `title`;

export interface HeadingProps {
  children: ReactNode;
  level?: HeadingLevel; // Semantic HTML tag
  style?: HeadingStyle; // Visual style class
  className?: string;
}
