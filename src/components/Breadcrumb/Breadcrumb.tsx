import { Link } from '@/components/Link/Link';
import React from 'react';
import { useLocation } from 'react-router-dom';
import * as styles from './Breadcrumb.styles';
import { ARIA_LABEL, DEFAULT_BASE, SEPARATOR_ICON } from './Breadcrumb.constants';
import { BreadcrumbPath, BreadcrumbProps } from './Breadcrumb.types';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ base = DEFAULT_BASE }) => {
  const location = useLocation();
  const { pathname } = location;

  // Split the pathname and filter out empty strings
  const paths = pathname.split('/').filter(Boolean);

  // If on the home page, show only the base and return early
  if (paths.length === 0) {
    return (
      <nav aria-label={ARIA_LABEL}>
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <span className={styles.currentPage}>{base}</span>
          </li>
        </ol>
      </nav>
    );
  }

  // Build breadcrumb links for all other paths
  const breadcrumbPaths: BreadcrumbPath[] = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    const name = path.charAt(0).toUpperCase() + path.slice(1);
    return { name, href };
  });

  return (
    <nav aria-label={ARIA_LABEL}>
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/">{base}</Link>
          <svg className={styles.separator} {...SEPARATOR_ICON}>
            <path d={SEPARATOR_ICON.path}></path>
          </svg>
        </li>
        {breadcrumbPaths.map((path, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {index === breadcrumbPaths.length - 1 ? (
              // If it's the last item, display it as text (not a link)
              <span className={styles.currentPage}>{path.name}</span>
            ) : (
              // Otherwise, display it as a link
              <Link to={path.href}>
                {path.name}
                <svg className={styles.separator} {...SEPARATOR_ICON}>
                  <path d={SEPARATOR_ICON.path}></path>
                </svg>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
