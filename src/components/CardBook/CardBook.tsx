import { Link } from '@/components/Link/Link';
import React from 'react';
import { STAR_CHAR, TOTAL_STARS } from './CardBook.constants';
import {
  authorStyles,
  cardWrapper,
  coverImage,
  coverPlaceholder,
  coverWrapper,
  starEmpty,
  starFilled,
  starsWrapper,
} from './CardBook.styles';
import type { CardBookProps } from './CardBook.types';

export const CardBook: React.FC<CardBookProps> = ({
  title,
  authors,
  coverUrl,
  stars,
  href,
}) => {
  return (
    <div className={cardWrapper}>
      <div className={coverWrapper}>
        {coverUrl ? (
          <img src={coverUrl} alt={title} className={coverImage} />
        ) : (
          <div className={coverPlaceholder} />
        )}
      </div>

      {href ? (
        <Link href={href} label={title} color='black' icon='none' wrap />
      ) : (
        <p className='font-sans font-bold text-base leading-[20px] text-black line-clamp-2'>{title}</p>
      )}

      <p className={authorStyles}>{authors.join(', ')}</p>

      {stars !== undefined && (
        <div className={starsWrapper}>
          {Array.from({ length: TOTAL_STARS }, (_, i) => (
            <span key={i} className={i < stars ? starFilled : starEmpty}>
              {STAR_CHAR}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
