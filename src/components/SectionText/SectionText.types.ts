import type { ReactNode } from 'react';

export interface SectionTextProps {
  body?: string;
  children?: ReactNode;
  usecase?: 'full' | 'large' | 'default' | 'small';
}
