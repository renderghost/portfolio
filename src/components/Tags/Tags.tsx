import { cn } from '@/lib/utils';
import React from 'react';
import { Paragraph } from '../Paragraph/Paragraph';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="px-2 py-1 text-sm font-medium bg-gray-200 rounded">{label}</span>
);

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
        <Paragraph size="label">No tags available</Paragraph>
      )}
    </div>
  );
};
