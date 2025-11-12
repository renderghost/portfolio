import { ReactNode } from 'react';

export type BulletStyle = 'disc' | 'circle' | 'square' | 'arrow' | 'dash' | 'angle';

export interface UnorderedListProps {
  children: ReactNode;
  bullet?: BulletStyle;
  className?: string;
}
