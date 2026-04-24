import React from 'react';
import { Link } from 'react-router-dom';
import { getColStyles } from './SectionPitchLocked.constants';
import {
  gridWrapper,
  headingStyles,
  imageEl,
  imageWrapper,
  lockLabel,
  overlay,
} from './SectionPitchLocked.styles';
import type { SectionPitchLockedProps } from './SectionPitchLocked.types';

export const SectionPitchLocked: React.FC<SectionPitchLockedProps> = ({
  src,
  alt,
  usecase = 'large',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <p className={headingStyles}>Presentation</p>
        <div className={imageWrapper}>
          <img src={src} alt={alt} className={imageEl} />
          <div className={overlay}>
            <Link to='/contact' className={lockLabel}>Request access</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
