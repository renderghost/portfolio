import * as styles from './Footer.styles';
import { COPYRIGHT_NAME, COPYRIGHT_TEXT, SOCIAL_LINKS } from './Footer.constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {/* Social Links */}
          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.label}
              >
                <svg className={styles.socialIcon} fill="currentColor" viewBox={social.icon.viewBox} aria-hidden="true">
                  <path
                    fillRule={social.icon.fillRule}
                    d={social.icon.path}
                    clipRule={social.icon.clipRule}
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            © {currentYear} {COPYRIGHT_NAME}. {COPYRIGHT_TEXT}.
          </div>
        </div>
      </div>
    </footer>
  );
}
