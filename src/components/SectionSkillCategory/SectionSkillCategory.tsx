import { CardSkillCategory } from '@/components/CardSkillCategory/CardSkillCategory';
import React from 'react';
import { getColStyles, gridWrapper } from './SectionSkillCategory.styles';
import type { SectionSkillCategoryProps } from './SectionSkillCategory.types';

export const SectionSkillCategory: React.FC<SectionSkillCategoryProps> = ({
  usecase = '2/3',
  ...cardProps
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <CardSkillCategory {...cardProps} />
      </div>
    </div>
  );
};
