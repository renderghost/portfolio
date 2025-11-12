import { cn } from '@/lib/utils';
import React from 'react';
import { captionStyles } from './Caption.styles';
import { CaptionProps } from './Caption.types';

export const Caption = React.forwardRef<HTMLElement, CaptionProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <figcaption ref={ref} className={cn(captionStyles.base, className)} {...props}>
        {children}
      </figcaption>
    );
  },
);

Caption.displayName = 'Caption';
