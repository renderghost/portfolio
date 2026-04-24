import React from 'react';
import { getColStyles } from './SectionHeader.constants';
import {
  gridWrapper,
  overlineStyles,
  titleStyles,
} from './SectionHeader.styles';
import type { SectionHeaderProps } from './SectionHeader.types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  overline,
  usecase = 'full',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        {overline && <p className={overlineStyles}>{overline}</p>}
        <p className={titleStyles}>{title}</p>
      </div>
    </div>
  );
};
