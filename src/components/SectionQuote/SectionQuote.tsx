import React from 'react';
import {
  attributionRow,
  attributionStyles,
  getColStyles,
  getQuoteStyles,
  gridWrapper,
} from './SectionQuote.styles';
import type { SectionQuoteProps } from './SectionQuote.types';

export const SectionQuote: React.FC<SectionQuoteProps> = ({
  quote,
  attribution,
  size = 'lg',
  usecase = 'full',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <p className={getQuoteStyles(size)}>{quote}</p>
        {attribution && (
          <div className={attributionRow}>
            <span className={attributionStyles}>—</span>
            <span className={attributionStyles}>{attribution}</span>
          </div>
        )}
      </div>
    </div>
  );
};
