import { ReactNode } from 'react';

export type SectionTheme = 'mono' | 'gray' | 'yellow' | 'blue' | 'red' | 'purple';

export interface SectionProps {
  children: ReactNode;
  theme?: SectionTheme;
  className?: string;
  id?: string;
}
