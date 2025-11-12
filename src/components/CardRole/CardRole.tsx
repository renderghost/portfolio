import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import React from 'react';
import * as styles from './CardRole.styles';
import { CardRoleProps } from './CardRole.types';

/**
 * Format date string to readable format
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
}

export const CardRole: React.FC<CardRoleProps> = ({ role }) => {
  const startDate = formatDate(role.startDate);
  const endDate = role.endDate ? formatDate(role.endDate) : 'Present';
  const dateRange = `${startDate} — ${endDate}`;

  return (
    <div className={styles.cardWrapper}>
      {/* Content */}
      <div className={styles.contentContainer}>
        {/* Company Name (left) and Date (right) */}
        <div className={styles.metaContainer}>
          <span className={styles.companyName}>{role.company}</span>
          <span className={styles.date}>{dateRange}</span>
        </div>
        <div className={styles.detailContainer}>
          {/* Position Title */}
          <Heading level={3} size="md">
            {role.position}
          </Heading>

          {/* Description */}
          {role.description && <Paragraph size="base">{role.description}</Paragraph>}
        </div>
      </div>
    </div>
  );
};
