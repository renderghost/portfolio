import React from 'react';
import { getBadgeStyles } from './BadgeProject.styles';
import type { BadgeProjectProps } from './BadgeProject.types';

export const BadgeProject: React.FC<BadgeProjectProps> = ({
  label,
  variant,
}) => {
  return <span className={getBadgeStyles(variant)}>{label}</span>;
};
