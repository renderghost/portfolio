import React from 'react';
import { Link } from '@/components/Link/Link';
import { NAV_LINKS } from './PageHeader.constants';
import {
  getWrapperStyles,
  navLinksGroup,
  navRow,
  overlineStyles,
  pageTitleStyles,
  titleBlock,
  titleColumn,
} from './PageHeader.styles';
import type { PageHeaderProps } from './PageHeader.types';

export const PageHeader: React.FC<PageHeaderProps> = ({
  overline,
  pageTitle,
  className,
}) => {
  return (
    <header className={getWrapperStyles(className)}>
      <div className={navRow}>
        <Link
          href='/'
          label='EXIT'
          usecase='default'
          hasLeftIcon={true}
          hasRightIcon={false}
        />
        <nav className={navLinksGroup}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              label={link.label}
              usecase='default'
              hasLeftIcon={false}
              hasRightIcon={false}
            />
          ))}
        </nav>
      </div>
      <div className={titleBlock}>
        <div className={titleColumn}>
          {overline && <p className={overlineStyles}>{overline}</p>}
          {pageTitle && <p className={pageTitleStyles}>{pageTitle}</p>}
        </div>
      </div>
    </header>
  );
};