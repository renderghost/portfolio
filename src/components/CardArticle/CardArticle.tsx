import { Link } from '@/components/Link/Link';
import React from 'react';
import { DATE_FORMAT_OPTIONS } from './CardArticle.constants';
import * as styles from './CardArticle.styles';
import type { CardArticleProps } from './CardArticle.types';

export const CardArticle: React.FC<CardArticleProps> = ({ article }) => {
  const formattedDate = new Date(article.published).toLocaleDateString(
    'en-US',
    DATE_FORMAT_OPTIONS,
  );

  return (
    <div className={styles.cardWrapper}>
      {/* Cover image */}
      <div className={styles.coverImageContainer}>
        {article.coverImage && (
          <img src={article.coverImage} alt="" className={styles.coverImage} />
        )}
      </div>

      {/* Content */}
      <div className={styles.contentContainer}>
        {/* Meta row: publication avatar · name · date */}
        <div className={styles.metaRow}>
          {article.publicationIcon && (
            <img
              src={article.publicationIcon}
              alt=""
              className={styles.publicationAvatar}
            />
          )}
          <span className={styles.metaText}>{article.publication}</span>
          <span className={styles.metaText}>·</span>
          <span className={styles.metaText}>{formattedDate}</span>
        </div>

        {/* Title */}
        <p className={styles.title}>{article.title}</p>

        {/* Subtitle */}
        {article.subtitle && (
          <p className={styles.subtitle}>{article.subtitle}</p>
        )}

        {/* Read link */}
        <Link
          href={article.articleUrl}
          label='Read'
          icon='right'
          iconChar='↗'
        />
      </div>
    </div>
  );
};
