import React from 'react';
import {
  attributionRow,
  attributionStyles,
  getColStyles,
  gridWrapper,
  quoteStyles,
} from './SectionQuote.styles';
import type { SectionQuoteProps } from './SectionQuote.types';

export const SectionQuote: React.FC<SectionQuoteProps> = ({
  quote,
  attribution,
  usecase = 'default',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <p className={quoteStyles}>{quote}</p>
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
