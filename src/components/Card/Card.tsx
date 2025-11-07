import React from 'react';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import * as styles from './Card.styles';
import { META_SEPARATOR } from './Card.constants';
import { BaseCardProps } from './Card.types';

export const Card: React.FC<BaseCardProps> = ({ className, coverImage, badge, meta, title, description, onClick }) => {
  const CardWrapper = onClick ? 'button' : 'div';

  return (
    <CardWrapper className={styles.getCardWrapperStyles(onClick, className)} onClick={onClick}>
      {/* Cover Image */}
      {coverImage && (
        <div className={styles.coverImageContainer}>
          <img src={coverImage} alt="" className={styles.coverImage} />
        </div>
      )}

      {/* Content */}
      <div className={styles.contentContainer}>
        {/* Badge + Meta */}
        <div className={styles.badgeMetaContainer}>
          {badge && <span className={styles.getBadgeStyles(badge.variant)}>{badge.label}</span>}
          {meta && (
            <div className={styles.metaContainer}>
              {meta.company && <span>{meta.company}</span>}
              {meta.company && meta.date && <span>{META_SEPARATOR}</span>}
              {meta.date && <span>{meta.date}</span>}
            </div>
          )}
        </div>

        {/* Title */}
        <Heading level={3}>{title}</Heading>
        {/* Description */}
        {description && <Paragraph>{description}</Paragraph>}
      </div>
    </CardWrapper>
  );
};
