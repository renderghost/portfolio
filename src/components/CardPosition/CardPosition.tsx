import { Markdown } from '@/components/Markdown/Markdown';
import React from 'react';
import { WORKPLACE_TYPE_LABELS } from './CardPosition.constants';
import * as styles from './CardPosition.styles';
import type { CardPositionProps } from './CardPosition.types';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export const CardPosition: React.FC<CardPositionProps> = ({
  company,
  title,
  description,
  startedAt,
  endedAt,
  location,
  workplaceType,
}) => {
  const isCurrent = !endedAt;
  const formattedStart = startedAt ? formatDate(startedAt) : null;
  const formattedEnd = endedAt ? formatDate(endedAt) : 'Date';

  const hasLocation = location && (location.city || location.region || location.countryCode);

  return (
    <div className={styles.getCardWrapper(isCurrent)}>

      {/* Title row */}
      <div className={styles.titleRow}>
        <p className={styles.titleStyles}>{title}</p>
        {isCurrent && (
          <span className={styles.currentBadge}>Current</span>
        )}
      </div>

      {/* Meta row */}
      <div className={styles.metaRow}>
        <div className={styles.metaLeft}>
          <span>{company}</span>
          {hasLocation && (
            <>
              <span>·</span>
              <span>
                {[location.city, location.region, location.countryCode]
                  .filter(Boolean)
                  .join(', ')}
              </span>
            </>
          )}
          {workplaceType && WORKPLACE_TYPE_LABELS[workplaceType] && (
            <>
              <span>·</span>
              <span>{WORKPLACE_TYPE_LABELS[workplaceType]}</span>
            </>
          )}
        </div>
        {formattedStart && (
          <div className={styles.metaRight}>
            <span>{formattedStart}</span>
            <span>–</span>
            <span>{formattedEnd}</span>
          </div>
        )}
      </div>

      {/* Description */}
      {description && <Markdown>{description}</Markdown>}
    </div>
  );
};
