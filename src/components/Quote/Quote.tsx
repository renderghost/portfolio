import { cn } from '@/lib/utils';
import React from 'react';
import { quoteStyles } from './Quote.styles';
import { QuoteProps } from './Quote.types';

export const Quote = React.forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ children, size = 'md', cite, className = '', ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={cn(quoteStyles.base, quoteStyles.sizes[size], className)}
        cite={cite}
        {...props}
      >
        {children}
      </blockquote>
    );
  },
);

Quote.displayName = 'Quote';
