import React from 'react';
import * as styles from './CardGrainPhoto.styles';
import type { CardGrainPhotoProps } from './CardGrainPhoto.types';

export const CardGrainPhoto: React.FC<CardGrainPhotoProps> = ({ src, alt }) => {
  return (
    <div className={styles.photoWrapper}>
      <img src={src} alt={alt} className={styles.photo} />
    </div>
  );
};
