import { cn } from '@/lib/utils';
import React from 'react';
import { codeStyles } from './Code.styles';
import { CodeProps } from './Code.types';

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ children, variant = 'inline', language, className = '', ...props }, ref) => {
    const codeElement = (
      <code
        ref={ref}
        className={cn(codeStyles.base, codeStyles.variants[variant], className)}
        data-language={language}
        {...props}
      >
        {children}
      </code>
    );

    // For block variant, wrap in <pre> tag
    if (variant === 'block') {
      return <pre className="not-prose">{codeElement}</pre>;
    }

    return codeElement;
  },
);

Code.displayName = 'Code';
