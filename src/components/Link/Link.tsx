import { cn } from '@/lib/utils';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { colorVariantStyles, linkBaseStyles, underlinePositionStyles, underlineStyles } from './Link.styles';
import { LinkProps } from './Link.types';

export const Link: React.FC<LinkProps> = ({
  to,
  href,
  children,
  underline = 'always',
  underlinePosition = 'center',
  color = 'current',
  className,
  ...props
}) => {
  // Convert `to` to `href` if `to` is provided
  const linkHref = to || href;

  const underlineClass = underlineStyles[underline];
  const positionClass = underlinePositionStyles[underlinePosition];
  const colorClass = colorVariantStyles[color];

  // Check if this is an internal link (starts with / and no protocol)
  const isInternal = linkHref?.startsWith('/') && !linkHref.startsWith('//');

  const linkClasses = cn(linkBaseStyles, underlineClass, positionClass, colorClass, className);

  // Use React Router Link for internal navigation
  if (isInternal && linkHref) {
    return (
      <RouterLink to={linkHref} className={linkClasses} {...props}>
        {children}
      </RouterLink>
    );
  }

  // Use regular anchor for external links
  return (
    <a href={linkHref} className={linkClasses} {...props}>
      {children}
    </a>
  );
};
