import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROLES_BASE_PATH } from './CardRole.constants';
import * as styles from './CardRole.styles';
import { CardRoleProps } from './CardRole.types';

export const CardRole: React.FC<CardRoleProps> = ({ role }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`${ROLES_BASE_PATH}/${role.slug}`)} className={styles.cardWrapper}>
      {/* Cover Image (if available) */}
      {role.coverImage && (
        <div className={styles.coverImageContainer}>
          <img src={role.coverImage} alt="" className={styles.coverImage} />
        </div>
      )}

      {/* Content */}
      <div className={styles.contentContainer}>
        {/* Company Name (left) and Date (right) */}
        <div className={styles.metaContainer}>
          <span className={styles.companyName}>{role.company}</span>
          <span className={styles.date}>{role.date}</span>
        </div>
        <div className={styles.detailContainer}>
          {/* Title */}
          <Heading level={3} size="lg">
            {role.title}
          </Heading>

          {/* Subtitle/Description */}
          {role.subtitle && <Paragraph>{role.subtitle}</Paragraph>}
        </div>
      </div>
    </button>
  );
};
