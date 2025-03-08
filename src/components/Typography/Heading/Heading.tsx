import { cn } from '@/lib/utils';
import React from 'react';
import { HeadingStyles } from './Heading.styles';
import { HeadingLevel, HeadingProps } from './Heading.types';

const getHeadingTag = (level: HeadingLevel) => {
  switch (level) {
    case 1:
      return 'h1';
    case 2:
      return 'h2';
    case 3:
      return 'h3';
    case 4:
      return 'h4';
    default:
      return 'h3';
  }
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level = 3, style = 'body-title', className = '', ...props }, ref) => {
    const Component = getHeadingTag(level);

    return React.createElement(
      Component,
      {
        ref,
        className: cn(HeadingStyles.base, HeadingStyles.styles[style], className),
        ...props,
      },
      children,
    );
  },
);

Heading.displayName = 'Heading';
