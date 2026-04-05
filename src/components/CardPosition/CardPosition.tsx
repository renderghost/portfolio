import React from 'react';
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
  employmentType,
  startedAt,
  endedAt,
  location,
  remote,
}) => {
  const isCurrent = !endedAt;
  const formattedStart = startedAt ? formatDate(startedAt) : null;
  const formattedEnd = endedAt ? formatDate(endedAt) : null;

  return (
    <div className={styles.cardWrapper}>


      {/* Title */}
      <p className={styles.titleStyles}>{title}</p>

      {/* Meta row: company · type on left, badge + dates on right */}
      <div className={styles.metaRow}>
        <div className={styles.metaLeft}>
          <span>{company}</span>
          {employmentType && (
            <>
              <span>·</span>
              <span>{employmentType}</span>
            </>
          )}
        </div>
        <div className={styles.metaRight}>
          {isCurrent && (
            <span className={styles.currentBadge}>Current</span>
          )}
          {formattedStart && (
            <div className={styles.dateRow}>
              <span>{formattedStart}</span>
              <span>–</span>
              <span>{formattedEnd ?? 'Date'}</span>
            </div>
          )}
        </div>
      </div>
      {/* Description */}
      {description && (
        <p className={styles.descriptionStyles}>{description}</p>
      )}

      {/* Location row */}
      {(location || remote) && (
        <div className={styles.locationRow}>
          {location && (location.city || location.country) && (
            <div className={styles.locationText}>
              {location.city && <span>{location.city}</span>}
              {location.city && location.country && <span>,</span>}
              {location.country && <span>{location.country}</span>}
            </div>
          )}
          {remote && (
            <span className={styles.remoteBadge}>Remote</span>
          )}
        </div>
      )}
    </div>
  );
};
