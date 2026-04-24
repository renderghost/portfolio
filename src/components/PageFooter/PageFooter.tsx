import React from 'react';
import { Link } from '@/components/Link/Link';
import {
  DEFAULT_COPYRIGHT,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from './PageFooter.constants';
import {
  copyrightBlock,
  copyrightStyles,
  getWrapperStyles,
  legalBlock,
  socialBlock,
} from './PageFooter.styles';
import type { PageFooterProps } from './PageFooter.types';

export const PageFooter: React.FC<PageFooterProps> = ({
  copyright = DEFAULT_COPYRIGHT,
  className,
}) => {
  return (
    <footer className={getWrapperStyles(className)}>
      {/* Copyright: order-3 mobile (bottom) → order-1 desktop (left) */}
      <div className={copyrightBlock}>
        <p className={copyrightStyles}>{copyright}</p>
      </div>

      {/* Legal links: order-2 on both */}
      <div className={legalBlock}>
        {LEGAL_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            label={link.label}
            color='blue'
          />
        ))}
      </div>

      {/* Social links: order-1 mobile (top) → order-3 desktop (right) */}
      <div className={socialBlock}>
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            label={link.label}
            color='blue'
          />
        ))}
      </div>
    </footer>
  );
};
