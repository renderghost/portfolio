import { CardBook } from '@/components/CardBook/CardBook';
import { Link } from '@/components/Link/Link';
import { useBookhive } from '@/hooks/atproto';
import React from 'react';
import { BOOKHIVE_URL, getColStyles } from './SectionReadingList.constants';
import {
  bookGrid,
  gridWrapper,
  h2Styles,
  h3Styles,
  loadingStyles,
  rowWrapper,
} from './SectionReadingList.styles';
import type { SectionReadingListProps } from './SectionReadingList.types';

export const SectionReadingList: React.FC<SectionReadingListProps> = ({
  usecase = 'full',
}) => {
  const { reading, read, loading, error } = useBookhive();

  if (error) return null;

  return (
    <div className={gridWrapper}>
      <div className={getColStyles(usecase)}>
        <h2 className={h2Styles}>My Reading List</h2>

        {loading && <p className={loadingStyles}>Loading reading list…</p>}

        {!loading && reading.length > 0 && (
          <div className={rowWrapper}>
            <h3 className={h3Styles}>Currently Reading</h3>
            <div className={bookGrid}>
              {reading.map((book) => (
                <CardBook
                  key={book.uri}
                  title={book.title}
                  authors={book.authors}
                  coverUrl={book.coverUrl}
                  stars={book.stars}
                />
              ))}
            </div>
          </div>
        )}

        {!loading && read.length > 0 && (
          <div className={rowWrapper}>
            <h3 className={h3Styles}>Recently Read</h3>
            <div className={bookGrid}>
              {read.map((book) => (
                <CardBook
                  key={book.uri}
                  title={book.title}
                  authors={book.authors}
                  coverUrl={book.coverUrl}
                  stars={book.stars}
                />
              ))}
            </div>
          </div>
        )}

        {!loading && (
          <Link
            href={BOOKHIVE_URL}
            label='View my full reading list'
            icon='right'
          />
        )}
      </div>
    </div>
  );
};
