import { Link } from '@/components/Link/Link';
import React from 'react';
import { NAV_LINKS } from './PageHeader.constants';
import {
  exitRow,
  getWrapperStyles,
  navColumn,
  navGroup,
  overlineStyles,
  pageTitleStyles,
  titleBlock,
} from './PageHeader.styles';
import type { PageHeaderProps } from './PageHeader.types';

export const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle, overline, className }) => {
  return (
    <header className={getWrapperStyles(className)}>
      {/* Mobile only: EXIT link sits above the title */}
      <div className={exitRow}>
        <Link href="/" label="Back to Home" usecase="default" hasLeftIcon={true} hasRightIcon={false} />
      </div>

      {/* Title block: order-2 mobile → order-1 desktop */}
      <div className={titleBlock}>
        {overline && <p className={overlineStyles}>{overline}</p>}
        {pageTitle && <p className={pageTitleStyles}>{pageTitle}</p>}
      </div>

      {/* Desktop only: full page nav sits to the right of title */}
      <div className={navColumn}>
        <nav className={navGroup}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              label={link.label}
              usecase="default"
              hasLeftIcon={false}
              hasRightIcon={false}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};
