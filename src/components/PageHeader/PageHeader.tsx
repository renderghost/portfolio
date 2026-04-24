import { Link } from '@/components/Link/Link';
import React from 'react';
import { NAV_LINKS } from './PageHeader.constants';
import {
  breadcrumbGroup,
  breadcrumbSeparator,
  getWrapperStyles,
  navGroup,
  topRow,
} from './PageHeader.styles';
import type { PageHeaderProps } from './PageHeader.types';

const DEFAULT_BREADCRUMBS = [{ label: 'Home', href: '/' }];

export const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  breadcrumbs,
}) => {
  const crumbs = breadcrumbs ?? DEFAULT_BREADCRUMBS;

  return (
    <header className={getWrapperStyles(className)}>
      {/* Nav first in DOM (mobile top), breadcrumb second; order swapped on desktop */}
      <div className={topRow}>
        <nav className={navGroup}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              label={link.label}
              color='blue'
            />
          ))}
        </nav>
        <div className={breadcrumbGroup}>
          {crumbs.map((crumb, i) => (
            <React.Fragment key={crumb.href}>
              {i > 0 && <span className={breadcrumbSeparator}>/</span>}
              <Link
                href={crumb.href}
                label={crumb.label}
                color='blue'
                icon={i === 0 ? 'left' : 'none'}
                iconChar='←'
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
};
