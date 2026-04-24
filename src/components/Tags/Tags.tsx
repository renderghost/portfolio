import { Tag } from '@/components/Tag/Tag';
import React from 'react';
import { containerStyles } from './Tags.styles';
import type { TagsProps } from './Tags.types';

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className={containerStyles}>
      {tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  );
};
