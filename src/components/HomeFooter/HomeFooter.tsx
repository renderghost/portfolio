import React from 'react';
import { Link } from '@/components/Link/Link';
import { DEFAULT_COPYRIGHT, FOOTER_LINKS } from './HomeFooter.constants';
import {
  copyrightStyles,
  creditBlock,
  getWrapperStyles,
  legalBlock,
} from './HomeFooter.styles';
import type { HomeFooterProps } from './HomeFooter.types';

export const HomeFooter: React.FC<HomeFooterProps> = ({
  copyright = DEFAULT_COPYRIGHT,
  className,
}) => {
  return (
    <footer className={getWrapperStyles(className)}>
      <div className={creditBlock}>
        <p className={copyrightStyles}>{copyright}</p>
      </div>
      <div className={legalBlock}>
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            label={link.label}
            usecase='on contrast'
            hasLeftIcon={false}
            hasRightIcon={false}
          />
        ))}
      </div>
    </footer>
  );
};