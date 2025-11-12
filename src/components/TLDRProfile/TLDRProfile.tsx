import { Link } from '@/components/Link/Link';
import { Tags } from '@/components/Tags/Tags';
import { useProtopro } from '@/hooks/atproto';
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
  const { data: profile } = useProtopro();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src={PROFILE.avatarSrc} alt={PROFILE.name} className={styles.avatar} />

        <div className={styles.infoSection}>
          <Heading level={3} size="md">
            {PROFILE.name}
          </Heading>
          <Paragraph size="base">{PROFILE.location}</Paragraph>
          <Paragraph size="base">{profile?.overview || PROFILE.title}</Paragraph>
          {/* <Paragraph size="base">{PROFILE.experience}</Paragraph> */}
        </div>

        {profile?.skills && profile.skills.length > 0 && (
          <div className={styles.section}>
            <Heading level={4} size="base">
              {SECTIONS.skills}
            </Heading>
            <Tags tags={[...profile.skills].sort().join(', ')} className="flex-wrap" />
          </div>
        )}

        {profile?.languages && profile.languages.length > 0 && (
          <div className={styles.section}>
            <Heading level={4} size="base">
              {SECTIONS.languages}
            </Heading>
            <Tags
              tags={[...profile.languages]
                .map((lang) => lang.code)
                .sort()
                .join(', ')}
              className="flex-wrap"
            />
          </div>
        )}

        <div className={styles.section}>
          <Heading level={4} size="base">
            {SECTIONS.connect}
          </Heading>

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
