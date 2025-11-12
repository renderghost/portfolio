import { Link } from '@/components/Link/Link';
import { Tags } from '@/components/Tags/Tags';
import { specializations } from '@/data/specializations';
import type { JSX } from 'react';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import { CONNECT_LINKS, PROFILE, SECTIONS } from './TLDRProfile.constants';
import * as styles from './TLDRProfile.styles';

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
          <Heading level={3} size="md">
            {PROFILE.name}
          </Heading>
          <Paragraph size="sm">{PROFILE.title}</Paragraph>
          <Paragraph size="sm">{PROFILE.location}</Paragraph>
          <Paragraph size="sm">{PROFILE.experience}</Paragraph>
        </div>

        <div className={styles.section}>
          <Paragraph size="md">{SECTIONS.specializations}</Paragraph>
          <Tags tags={specializations} className="flex-wrap" />
        </div>

        <div className={styles.section}>
          <Paragraph size="md">{SECTIONS.connect}</Paragraph>

          <Paragraph className={styles.sectionTitle}>{SECTIONS.connect}</Paragraph>
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
