import { Link } from '@/components/Link/Link';
import React from 'react';
import { NAV_LINKS } from './PageHeader.constants';
import {
  breadcrumbGroup,
  breadcrumbSeparator,
  getWrapperStyles,
  navGroup,
  overlineStyles,
  pageTitleStyles,
  titleBlock,
  topRow,
} from './PageHeader.styles';
import type { PageHeaderProps } from './PageHeader.types';

const DEFAULT_BREADCRUMBS = [{ label: 'Home', href: '/' }];

export const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  overline,
  className,
  breadcrumbs,
}) => {
  const crumbs = breadcrumbs ?? DEFAULT_BREADCRUMBS;

  return (
    <header className={getWrapperStyles(className)}>
      {/* Row 1: breadcrumb left, primary nav right */}
      <div className={topRow}>
        <div className={breadcrumbGroup}>
          {crumbs.map((crumb, i) => (
            <React.Fragment key={crumb.href}>
              {i > 0 && <span className={breadcrumbSeparator}>/</span>}
              <Link
                href={crumb.href}
                label={crumb.label}
                usecase='default'
                hasLeftIcon={i === 0}
                hasRightIcon={false}
              />
            </React.Fragment>
          ))}
        </div>
        <nav className={navGroup}>
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

      {/* Row 2: page title full width */}
      <div className={titleBlock}>
        {overline && <p className={overlineStyles}>{overline}</p>}
        {pageTitle && <p className={pageTitleStyles}>{pageTitle}</p>}
      </div>
    </header>
  );
};
