import { cn } from '@/lib/utils';
import React from 'react';
import { Skill } from './Skill';
import { skillsStyles } from './Skills.styles';
import { SkillsProps } from './Skills.types';

export const Skills: React.FC<SkillsProps> = ({ items, className = '' }) => (
  <div className={cn(skillsStyles.wrapper, className)}>
    {items.map((item) => (
      <Skill
        key={item.skillTitle}
        skillArtwork={item.skillArtwork}
        skillTitle={item.skillTitle}
        skillDescription={item.skillDescription}
        skillApproach={item.skillApproach}
      />
    ))}
  </div>
);
