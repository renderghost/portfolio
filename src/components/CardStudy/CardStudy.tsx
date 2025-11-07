import { Card } from '@/components/Card/Card';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './CardStudy.styles';
import { BADGE_VARIANT, CASE_STUDIES_BASE_PATH, DATE_FORMAT_OPTIONS } from './CardStudy.constants';
import { CardStudyProps } from './CardStudy.types';

export const CardStudy: React.FC<CardStudyProps> = ({ caseStudy }) => {
  const navigate = useNavigate();

  return (
    <Card
      coverImage={caseStudy.coverImage}
      badge={{
        label: caseStudy.type,
        variant: BADGE_VARIANT,
      }}
      meta={{
        company: caseStudy.company,
        date: new Date(caseStudy.endDate).toLocaleDateString('en-US', DATE_FORMAT_OPTIONS),
      }}
      title={caseStudy.name}
      description={caseStudy.summary}
      onClick={() => navigate(`${CASE_STUDIES_BASE_PATH}/${caseStudy.slug}`)}
      className={styles.cardWrapper}
    />
  );
};
