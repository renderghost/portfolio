import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { Menu, X } from 'lucide-react';
import React from 'react';
import * as styles from './TopBar.styles';
import { ARIA_LABELS, SOCIAL_LINKS } from './TopBar.constants';

const TopBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Breadcrumb />

        {/* Desktop Social Links */}
        <nav className={styles.desktopNav} aria-label={ARIA_LABELS.desktopNav}>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-controls={ARIA_LABELS.mobileMenu}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Social Links */}
      <nav id={ARIA_LABELS.mobileMenu} className={styles.getMobileNav(menuOpen)} aria-label={ARIA_LABELS.mobileNav}>
        <ul className={styles.mobileList}>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
