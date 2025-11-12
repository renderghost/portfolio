import { cn } from '@/lib/utils';
import React from 'react';
import { spanStyles } from './Span.styles';
import { SpanProps } from './Span.types';

export const Span = React.forwardRef<HTMLSpanElement, SpanProps>(
  ({ children, size = 'md', className = '', ...props }, ref) => {
    return (
      <span ref={ref} className={cn(spanStyles.base, spanStyles.sizes[size], className)} {...props}>
        {children}
      </span>
    );
  },
);

Span.displayName = 'Span';
