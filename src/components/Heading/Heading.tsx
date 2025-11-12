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
    case 5:
      return 'h5';
    case 6:
      return 'h6';
    default:
      return 'h3';
  }
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level = 3, size = 'md', className = '', ...props }, ref) => {
    const Component = getHeadingTag(level);

    return React.createElement(
      Component,
      {
        ref,
        className: cn(HeadingStyles.base, HeadingStyles.sizes[size], className),
        ...props,
      },
      children,
    );
  },
);

Heading.displayName = 'Heading';
