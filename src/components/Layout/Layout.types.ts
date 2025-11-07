import { ReactNode } from 'react';

export type PageTheme = 'accent' | 'default';

export interface LayoutProps {
  children: ReactNode;
  theme?: PageTheme;
}

export interface MainProps {
  children: ReactNode;
}

export interface AsideProps {
  children: ReactNode;
}
