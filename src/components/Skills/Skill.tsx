import { Artwork } from '@/components/Artwork/Artwork';
import { Heading } from '@/components/Heading/Heading';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { cn } from '@/lib/utils';
import React from 'react';
import { Tags } from '../Tags/Tags';
import { skillStyles } from './Skill.styles';
import { SkillProps } from './Skill.types';

export const Skill: React.FC<SkillProps> = ({
  skillTitle,
  skillDescription,
  skillApproach,
  skillArtwork,
  skillTags,
  className = '',
}) => (
  <div className={cn(skillStyles.wrapper, className)}>
    <div className="flex flex-col gap-8">
      <Artwork name={skillArtwork} />
      <div className="flex flex-col gap-2">
        <Heading level={3} style="body">
          {skillTitle}
        </Heading>
        <Paragraph size="byline">{skillDescription}</Paragraph>
        <Paragraph size="body">{skillApproach}</Paragraph>
        <Tags tags={skillTags} />
      </div>
    </div>
  </div>
);
