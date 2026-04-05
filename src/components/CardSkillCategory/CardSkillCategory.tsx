import React from 'react';
import { formatCategory } from './CardSkillCategory.constants';
import * as styles from './CardSkillCategory.styles';
import type { CardSkillCategoryProps } from './CardSkillCategory.types';

export const CardSkillCategory: React.FC<CardSkillCategoryProps> = ({
  category,
  skills,
}) => {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.categoryLabel}>{formatCategory(category)}</p>
      <div className={styles.badgeRow}>
        {skills.map((skill) => (
          <span key={skill} className={styles.badge}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
