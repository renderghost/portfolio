import { CardPosition } from '@/components/CardPosition/CardPosition';
import React from 'react';
import { getColStyles, gridWrapper } from './SectionPosition.styles';
import type { SectionPositionProps } from './SectionPosition.types';

export const SectionPosition: React.FC<SectionPositionProps> = ({
  usecase = '2/3',
  ...cardProps
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <CardPosition {...cardProps} />
      </div>
    </div>
  );
};
