import { cn } from '@/lib/utils';
import React from 'react';
import { paragraphStyles } from './Paragraph.styles';
import { ParagraphProps } from './Paragraph.types';

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, size = 'body', className = '' }, ref) => {
    return (
      <p ref={ref} className={cn(paragraphStyles.base, paragraphStyles.sizes[size], className)}>
        {children}
      </p>
    );
  },
);

Paragraph.displayName = 'Paragraph';
