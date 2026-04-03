import React from 'react';
import { Link } from '@/components/Link/Link';
import {
  descriptionStyles,
  getCardStyles,
  getTitleStyles,
  overlineStyles,
} from './CardHome.styles';
import type { CardHomeProps } from './CardHome.types';

export const CardHome: React.FC<CardHomeProps> = ({
  overline,
  title,
  description,
  linkLabel,
  linkHref,
  isHero = false,
  className,
}) => {
  return (
    <div className={getCardStyles(className)}>
      <p className={overlineStyles}>{overline}</p>
      <p className={getTitleStyles(isHero)}>{title}</p>
      <p className={descriptionStyles}>{description}</p>
      <Link
        href={linkHref}
        label={linkLabel}
        size='medium'
        usecase='on contrast'
        hasLeftIcon={false}
        hasRightIcon={true}
      />
    </div>
  );
};