import { cn } from '@/lib/utils';
import React from 'react';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Tag } from '@/components/Tag/Tag';

interface TagsProps {
  tags?: string;
  className?: string;
}

export const Tags: React.FC<TagsProps> = ({ tags = '', className = '' }) => {
  const tagArray = tags ? tags.split(',').map((tag) => tag.trim()) : [];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tagArray.length > 0 ? (
        tagArray.map((tag, index) => <Tag key={`${tag}-${index}`} label={tag} />)
      ) : (
        <Paragraph size="sm">No tags available</Paragraph>
      )}
    </div>
  );
};
