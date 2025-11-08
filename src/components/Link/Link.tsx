import { cn } from '@/lib/utils';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { linkBaseStyles, underlinePositionStyles, underlineStyles } from './Link.styles';
import { LinkProps } from './Link.types';
import { usePageTheme } from '@/components/Layout/Layout';

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

  // Get page theme from context
  const pageTheme = usePageTheme();

  const underlineClass = underlineStyles[underline];
  const positionClass = underlinePositionStyles[underlinePosition];

  // Theme-based link colors:
  // Accent: white text (inherits from parent)
  // Default: blue text in light mode, white in dark mode
  const themeColorClass = pageTheme === 'accent'
    ? 'text-bones-white'
    : 'text-bones-blue dark:text-bones-white';

  // Check if this is an internal link (starts with / and no protocol)
  const isInternal = linkHref?.startsWith('/') && !linkHref.startsWith('//');

  const linkClasses = cn(linkBaseStyles, underlineClass, positionClass, themeColorClass, className);

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
