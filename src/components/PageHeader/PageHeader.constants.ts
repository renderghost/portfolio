export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/work' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Articles', href: '/writing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
