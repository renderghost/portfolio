export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface PageHeaderProps {
  className?: string;
  breadcrumbs?: BreadcrumbItem[];
}
