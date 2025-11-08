import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import React from 'react';
import { DATE_FORMAT_OPTIONS } from './CardArticle.constants';
import * as styles from './CardArticle.styles';
import { CardArticleProps } from './CardArticle.types';

export const CardArticle: React.FC<CardArticleProps> = ({ article }) => {
  const formattedDate = new Date(article.published).toLocaleDateString('en-US', DATE_FORMAT_OPTIONS);

  return (
    <a href={article.articleUrl} target="_blank" rel="noopener noreferrer" className={styles.cardWrapper}>
      {/* Cover Image (if available) */}
      {article.coverImage && (
        <div className={styles.coverImageContainer}>
          <img src={article.coverImage} alt="" className={styles.coverImage} />
        </div>
      )}

      {/* Content */}
      <div className={styles.contentContainer}>
        {/* Publication Name (left) and Date (right) */}
        <div className={styles.metaContainer}>
          <div className={styles.publicationContainer}>
            {article.publicationIcon && <img src={article.publicationIcon} alt="" className={styles.publicationIcon} />}
            <span className={styles.publicationName}>{article.publication}</span>
          </div>
          <span className={styles.date}>{formattedDate}</span>
        </div>
        <div className={styles.detailContainer}>
          {/* Title */}
          <Heading level={3} style="title">
            {article.title}
          </Heading>

          {/* Description */}
          {article.subtitle && <Paragraph>{article.subtitle}</Paragraph>}
        </div>
      </div>
    </a>
  );
};
