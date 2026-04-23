import React from 'react';
import { tagStyles } from './Tag.styles';
import type { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({ label }) => {
  return <span className={tagStyles}>{label}</span>;
};
