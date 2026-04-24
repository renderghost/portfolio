import React from 'react';
import { getColStyles } from './SectionHeader.constants';
import {
  gridWrapper,
  overlineStyles,
  statementStyles,
  titleStyles,
} from './SectionHeader.styles';
import type { SectionHeaderProps } from './SectionHeader.types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  overline,
  statement,
  usecase = 'default',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        {overline && <p className={overlineStyles}>{overline}</p>}
        <p className={titleStyles}>{title}</p>
        {statement && <p className={statementStyles}>{statement}</p>}
      </div>
    </div>
  );
};
