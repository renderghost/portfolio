import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './CardCaseStudy.styles';
import type { CardCaseStudyProps } from './CardCaseStudy.types';

export const CardCaseStudy: React.FC<CardCaseStudyProps> = ({ caseStudy }) => {
  return (
    <Link
      to={`/portfolio/${caseStudy.slug}`}
      className={styles.cardWrapper}
      aria-label={caseStudy.title}
    >
      {/* Cover image — full width, 16:9 */}
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
        {/* Meta row: affiliation · type */}
        <div className={styles.metaRow}>
          <span className={styles.metaText}>{caseStudy.affiliation}</span>
          <span className={styles.metaText}>·</span>
          <span className={styles.metaText}>{caseStudy.type}</span>
        </div>

        {/* Title */}
        <p className={styles.title}>{caseStudy.title}</p>

        {/* Summary */}
        {caseStudy.summary && (
          <p className={styles.summary}>{caseStudy.summary}</p>
        )}
      </div>
    </Link>
  );
};
