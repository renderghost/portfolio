import { ReactNode } from 'react';

export type ParagraphSize = 'footnote' | 'body' | 'lede' | 'label' | 'display' | 'blockquote' | 'caption' | 'byline' | 'billboard';

export interface ParagraphProps {
  children: ReactNode;
  size?: ParagraphSize;
  className?: string;
}
