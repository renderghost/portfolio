export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageHeaderProps {
  pageTitle?: string;
  overline?: string;
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
}
