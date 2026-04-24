import { ATPROTO_COLLECTIONS, buildPdsBlobUrl } from '@/config/atproto';
import type { BookValue } from '@/types/atproto';
import { useMemo } from 'react';
import { useRecords } from './useRecords';

export interface Book {
  uri: string;
  title: string;
  authors: string[];
  coverUrl?: string;
  stars?: number;
  status: string;
  createdAt: string;
  hiveBookUri?: string;
}

export interface Bookshelf {
  reading: Book[];
  read: Book[];
  loading: boolean;
  error: string | null;
}

const STATUS_READING = 'buzz.bookhive.defs#reading';
const STATUS_FINISHED = 'buzz.bookhive.defs#finished';
const LIMIT = 6;

export function useBookhive(): Bookshelf {
  const { data, loading, error } = useRecords<BookValue>(
    ATPROTO_COLLECTIONS.BOOKHIVE_BOOK,
  );

  const { reading, read } = useMemo(() => {
    if (!data) return { reading: [], read: [] };

    const books: Book[] = data
      .filter((r) => r.value.status === STATUS_READING || r.value.status === STATUS_FINISHED)
      .map((r) => ({
        uri: r.uri,
        title: r.value.title,
        authors: r.value.authors.split('\t').filter(Boolean),
        coverUrl: r.value.cover ? buildPdsBlobUrl(r.value.cover.ref.$link) : undefined,
        stars: r.value.stars !== undefined ? Math.round(r.value.stars / 2) : undefined,
        status: r.value.status ?? '',
        createdAt: r.value.createdAt,
        hiveBookUri: r.value.hiveBookUri ?? `at://did:plc:enu2j5xjlqsjaylv3du4myh4/buzz.bookhive.catalogBook/${r.value.hiveId}`,
      }));

    const byDate = (a: Book, b: Book) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

    return {
      reading: books.filter((b) => b.status === STATUS_READING).sort(byDate).slice(0, LIMIT),
      read: books.filter((b) => b.status === STATUS_FINISHED).sort(byDate).slice(0, LIMIT),
    };
  }, [data]);

  return { reading, read, loading, error };
}
