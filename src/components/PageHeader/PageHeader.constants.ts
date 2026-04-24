export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Career', href: '/career' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Writing', href: '/writing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
