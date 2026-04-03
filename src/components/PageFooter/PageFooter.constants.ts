import type { NavLink } from '@/components/PageHeader/PageHeader.types';

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Privacy', href: '/privacy' },
];

export const DEFAULT_COPYRIGHT = `© ${new Date().getFullYear()} Barry Prendergast`;