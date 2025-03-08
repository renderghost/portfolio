import { Heading } from '@/components/Typography/Heading/Heading';
import { Paragraph } from '@/components/Typography/Paragraph/Paragraph';
import { cn } from '@/lib/utils';
import React from 'react';
import { skillStyles } from './Skill.styles';
import { SkillProps } from './Skill.types';

export const Skill: React.FC<SkillProps> = ({ skillTitle, skillDescription, className = '' }) => (
  <div className={cn(skillStyles.wrapper, className)}>
    <div className="flex flex-col gap-2">
      <Heading level={3} style="body-title">
        {skillTitle}
      </Heading>
      <Paragraph size="body">{skillDescription}</Paragraph>
    </div>
  </div>
);
