import type { CardSkillCategoryProps } from '@/components/CardSkillCategory/CardSkillCategory.types';

export type SectionSkillCategoryProps = CardSkillCategoryProps & {
  usecase?: 'full' | 'large' | 'default' | 'small';
};
