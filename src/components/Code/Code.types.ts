import { ReactNode } from 'react';

export type CodeVariant = 'inline' | 'block';

export interface CodeProps {
  children: ReactNode;
  variant?: CodeVariant; // 'inline' for <code>, 'block' for <pre><code>
  language?: string; // Optional language identifier for syntax highlighting
  className?: string;
}
