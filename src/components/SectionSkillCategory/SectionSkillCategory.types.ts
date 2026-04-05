import type { CardSkillCategoryProps } from '@/components/CardSkillCategory/CardSkillCategory.types';

export interface SectionSkillCategoryProps extends CardSkillCategoryProps {
  usecase?: 'full' | '2/3';
}
