import { Link } from '@/components/Link/Link';
import { Tags } from '@/components/Tags/Tags';
import { specializations } from '@/data/specializations';
import type { JSX } from 'react';
import * as styles from './TLDRProfile.styles';
import { CONNECT_LINKS, PROFILE, SECTIONS } from './TLDRProfile.constants';

/**
 * TL;DR Profile sidebar component
 *
 * @returns JSX element with profile photo and summary information
 */
export default function TLDRProfile(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src={PROFILE.avatarSrc} alt={PROFILE.name} className={styles.avatar} />

        <div className={styles.infoSection}>
          <h1 className={styles.name}>{PROFILE.name}</h1>
          <p className={styles.detail}>{PROFILE.title}</p>
          <p className={styles.detail}>{PROFILE.location}</p>
          <p className={styles.detail}>{PROFILE.experience}</p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>{SECTIONS.specializations}</p>
          <Tags tags={specializations} className="flex-wrap" />
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>{SECTIONS.connect}</p>
          <div className={styles.connectLinks}>
            {CONNECT_LINKS.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
