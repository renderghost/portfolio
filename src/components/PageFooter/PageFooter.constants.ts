import type { NavLink } from '@/components/PageHeader/PageHeader.constants';

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Privacy', href: '/privacy' },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: 'Bluesky', href: 'https://bsky.app/profile/renderg.host' },
  { label: 'Calendar', href: 'https://calendly.com/barry-prendergast' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/barrymprendergast' },
  { label: 'Mail', href: 'mailto:me@renderg.host' },
];

export const DEFAULT_COPYRIGHT = `© ${new Date().getFullYear()} Barry Prendergast`;
