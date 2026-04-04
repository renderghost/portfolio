import React from 'react';
import {
  captionStyles,
  getColStyles,
  gridWrapper,
  imageEl,
  imageWrapper,
} from './SectionImage.styles';
import type { SectionImageProps } from './SectionImage.types';

export const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  caption,
  usecase = 'full',
}) => {
  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <div className={imageWrapper}>
          <img src={src} alt={alt} className={imageEl} />
        </div>
        {caption && <p className={captionStyles}>{caption}</p>}
      </div>
    </div>
  );
};
