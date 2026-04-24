import { Link } from '@/components/Link/Link';
import React from 'react';
import * as styles from './CardCaseStudy.styles';
import type { CardCaseStudyProps } from './CardCaseStudy.types';

export const CardCaseStudy: React.FC<CardCaseStudyProps> = ({ caseStudy }) => {
  return (
    <div className={styles.cardWrapper}>
      {/* Cover image */}
      <div className={styles.coverImageContainer}>
        {caseStudy.coverImage && (
          <img
            src={caseStudy.coverImage}
            alt=''
            className={styles.coverImage}
          />
        )}
      </div>

      {/* Content */}
      <div className={styles.contentContainer}>
        {/* Meta row: affiliation · type · year */}
        <div className={styles.metaRow}>
          <span className={styles.metaText}>{caseStudy.affiliation}</span>
          <span className={styles.metaText}>·</span>
          <span className={styles.metaText}>{caseStudy.type}</span>
          {caseStudy.yearEnded && (
            <>
              <span className={styles.metaText}>·</span>
              <span className={styles.metaText}>{caseStudy.yearEnded}</span>
            </>
          )}
        </div>

        {/* Title */}
        <p className={styles.title}>{caseStudy.title}</p>

        {/* Summary */}
        {caseStudy.summary && (
          <p className={styles.summary}>{caseStudy.summary}</p>
        )}

        {/* Link */}
        <Link
          href={`/portfolio/${caseStudy.slug}`}
          label='Read'
          icon='right'
          iconChar='↗'
        />
      </div>
    </div>
  );
};
