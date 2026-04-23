import React from 'react';
import { bodyStyles, getColStyles, gridWrapper } from './SectionText.styles';
import type { SectionTextProps } from './SectionText.types';

export const SectionText: React.FC<SectionTextProps> = ({
  body,
  children,
  usecase = 'default',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        {children ?? <p className={bodyStyles}>{body}</p>}
      </div>
    </div>
  );
};
