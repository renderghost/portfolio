import React from 'react';
import { formatProficiency } from './BadgeLanguage.constants';
import * as styles from './BadgeLanguage.styles';
import type { BadgeLanguageProps } from './BadgeLanguage.types';

export const BadgeLanguage: React.FC<BadgeLanguageProps> = ({
  language,
  proficiency,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.languageStyles}>{language}</p>
      <p className={styles.proficiencyStyles}>{formatProficiency(proficiency)}</p>
    </div>
  );
};
