import { cn } from '@/lib/utils';
import React from 'react';
import { linkBaseStyles, underlinePositionStyles, underlineStyles } from './Link.styles';
import { LinkProps } from './Link.types';

export const Link: React.FC<LinkProps> = ({
  to,
  href,
  children,
  underline = 'always',
  underlinePosition = 'center',
  className,
  ...props
}) => {
  // Convert `to` to `href` if `to` is provided
  const linkHref = to || href;

  const underlineClass = underlineStyles[underline];
  const positionClass = underlinePositionStyles[underlinePosition];

  return (
    <a href={linkHref} className={cn(linkBaseStyles, underlineClass, positionClass, className)} {...props}>
      {children}
    </a>
  );
};
