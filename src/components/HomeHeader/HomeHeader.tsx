import React from 'react';
import { Link } from '@/components/Link/Link';
import { NAV_LINKS, SITE_NAME, SITE_ROLE } from './HomeHeader.constants';
import {
  getWrapperStyles,
  identityBlock,
  identityColumn,
  nameStyles,
  navBlock,
  roleStyles,
} from './HomeHeader.styles';
import type { HomeHeaderProps } from './HomeHeader.types';

export const HomeHeader: React.FC<HomeHeaderProps> = ({ className }) => {
  return (
    <header className={getWrapperStyles(className)}>
      <div className={identityBlock}>
        <div className={identityColumn}>
          <p className={nameStyles}>{SITE_NAME}</p>
          <p className={roleStyles}>{SITE_ROLE}</p>
        </div>
      </div>
      <nav className={navBlock}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            label={link.label}
            color='white'
          />
        ))}
      </nav>
    </header>
  );
};