import { cn } from '@/lib/utils';
import React from 'react';
import { markStyles } from './Mark.styles';
import { MarkProps } from './Mark.types';

export const Mark = React.forwardRef<HTMLElement, MarkProps>(
  ({ children, size = 'md', className = '', ...props }, ref) => {
    return (
      <mark ref={ref} className={cn(markStyles.base, markStyles.sizes[size], className)} {...props}>
        {children}
      </mark>
    );
  },
);

Mark.displayName = 'Mark';
