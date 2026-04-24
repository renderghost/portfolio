import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DEFAULT_ICON } from './Link.constants';
import { getLinkStyles, iconStyles, labelStyles, labelWrapStyles } from './Link.styles';
import type { LinkProps } from './Link.types';

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  color = 'blue',
  size = 'base',
  icon = 'none',
  iconChar = DEFAULT_ICON,
  className,
  wrap = false,
}) => {
  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  const linkClass = getLinkStyles(color, size, className);
  const iconEl = <span className={iconStyles}>{iconChar}</span>;

  const content = (
    <>
      {icon === 'left' && iconEl}
      <span className={wrap ? labelWrapStyles : labelStyles}>{label}</span>
      {icon === 'right' && iconEl}
    </>
  );

  if (isInternal) {
    return (
      <RouterLink to={href} className={linkClass}>
        {content}
      </RouterLink>
    );
  }

  return (
    <a
      href={href}
      className={linkClass}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
    </a>
  );
};
