import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import * as styles from './Navigation.styles';
import { LOGO_TEXT, NAV_LINKS } from './Navigation.constants';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {/* Logo/Home Link */}
          <Link to="/" className={styles.logo}>
            {LOGO_TEXT}
          </Link>

          {/* Navigation Links and Theme Toggle */}
          <div className={styles.linksContainer}>
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
