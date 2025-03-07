import { ReactNode } from 'react';

export type ParagraphSize = 'footnote' | 'body' | 'lede' | 'label' | 'display' | 'blockquote' | 'caption' | 'byline';

export interface ParagraphProps {
  children: ReactNode;
  size?: ParagraphSize;
  className?: string;
}
