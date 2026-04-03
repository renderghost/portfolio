import React from 'react';
import { Link } from '@/components/Link/Link';
import { DEFAULT_COPYRIGHT, FOOTER_LINKS } from './PageFooter.constants';
import {
  copyrightStyles,
  creditBlock,
  getWrapperStyles,
  legalBlock,
} from './PageFooter.styles';
import type { PageFooterProps } from './PageFooter.types';

export const PageFooter: React.FC<PageFooterProps> = ({
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
            usecase='default'
            hasLeftIcon={false}
            hasRightIcon={false}
          />
        ))}
      </div>
    </footer>
  );
};