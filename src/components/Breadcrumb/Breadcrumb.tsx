import { Link } from '@/components/Link/Link';
import React from 'react';
import { useLocation } from 'react-router-dom';

export interface BreadcrumbProps {
  base?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ base = 'Home' }) => {
  const location = useLocation();
  const { pathname } = location;

  // Split the pathname and filter out empty strings
  const paths = pathname.split('/').filter(Boolean);

  // If on the home page, show only the base and return early
  if (paths.length === 0) {
    return (
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <span className="font-semibold text-brand-800 dark:text-brand-200">{base}</span>
          </li>
        </ol>
      </nav>
    );
  }

  // Build breadcrumb links for all other paths
  const breadcrumbPaths = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    const name = path.charAt(0).toUpperCase() + path.slice(1);
    return { name, href };
  });

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center whitespace-nowrap">
        <li className="inline-flex items-center">
          <Link to="/">{base}</Link>
          <svg
            className="shrink-0 mx-2 size-4 text-brand-400 dark:text-brand-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </li>
        {breadcrumbPaths.map((path, index) => (
          <li key={index} className="inline-flex items-center">
            {index === breadcrumbPaths.length - 1 ? (
              // If it's the last item, display it as text (not a link)
              <span className="font-semibold text-brand-800 dark:text-brand-200">{path.name}</span>
            ) : (
              // Otherwise, display it as a link
              <Link to={path.href}>
                {path.name}
                <svg
                  className="shrink-0 mx-2 size-4 text-brand-400 dark:text-brand-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
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
