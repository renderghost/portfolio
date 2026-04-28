import { Link } from '@/components/Link/Link';
import { SectionPosition } from '@/components/SectionPosition/SectionPosition';
import React from 'react';
import { MAX_POSITIONS } from './CardListPosition.constants';
import * as styles from './CardListPosition.styles';
import type { CardListPositionProps } from './CardListPosition.types';

export const CardListPosition: React.FC<CardListPositionProps> = ({
  title,
  variant,
  positions,
  linkedinUrl,
}) => {
  const displayedPositions = positions.slice(0, MAX_POSITIONS);
  const hasMore = positions.length > MAX_POSITIONS;

  return (
    <div className={styles.wrapper}>
      <p className={styles.sectionTitle}>{title}</p>

      {variant === 'current' && positions.length === 0 && (
        <div className={styles.bannerGrid}>
          <div className={styles.bannerInner}>
            <p className={styles.bannerHeadline}>Available for new work.</p>
            <p className={styles.bannerDescription}>
              If you&apos;re working on a complex product or service and need clearer direction or better outcomes, let&apos;s talk about your ambitions.
            </p>
            <Link href='/contact' label='Get in touch' color='black' icon='right' iconChar='→' />
          </div>
        </div>
      )}

      {variant === 'current' && positions.length > 0 && (
        <>
          <div className={styles.bannerGrid}>
            <div className={styles.bannerInner}>
              <p className={styles.bannerHeadline}>Open to Work</p>
              <p className={styles.bannerDescription}>
                If you&apos;re working on a complex product or service and need clearer direction or better outcomes, let&apos;s talk about your ambitions.
              </p>
              <Link href='/contact' label='Get in touch' color='black' icon='right' iconChar='→' />
            </div>
          </div>
          <div className={styles.positionList}>
            {displayedPositions.map((position, index) => (
              <SectionPosition key={`current-${position.company}-${index}`} {...position} />
            ))}
          </div>
        </>
      )}

      {variant === 'past' && (
        <>
          <div className={styles.positionList}>
            {displayedPositions.map((position, index) => (
              <SectionPosition key={`past-${position.company}-${index}`} {...position} />
            ))}
          </div>
          {hasMore && linkedinUrl && (
            <Link href={linkedinUrl} label='View more on LinkedIn' color='blue' />
          )}
        </>
      )}
    </div>
  );
};
