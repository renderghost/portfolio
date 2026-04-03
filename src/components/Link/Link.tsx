import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DEFAULT_ICON_LEFT, DEFAULT_ICON_RIGHT } from './Link.constants';
import { getLinkStyles, getLabelStyles, iconStyles } from './Link.styles';
import type { LinkProps } from './Link.types';

export const Link: React.FC<LinkProps> = ({
  href,
  label,
  size = 'base',
  usecase = 'default',
  hasLeftIcon = false,
  hasRightIcon = true,
  iconLeft = DEFAULT_ICON_LEFT,
  iconRight = DEFAULT_ICON_RIGHT,
  className,
}) => {
  const isInternal = href.startsWith('/') && !href.startsWith('//');
  const isExternal = href.startsWith('http://') || href.startsWith('https://');

  const linkClass = getLinkStyles(size, usecase, className);
  const labelClass = getLabelStyles(size);

  const content = (
    <>
      {hasLeftIcon && <span className={iconStyles}>{iconLeft}</span>}
      <span className={labelClass}>{label}</span>
      {hasRightIcon && <span className={iconStyles}>{iconRight}</span>}
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
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {content}
    </a>
  );
};