import { ATPROTO_COLLECTIONS } from '@/config/atproto';
import { buildCoverUrl } from '@/config/atproto/buildUrls';
import type { FetchResult } from '@/types/atproto';
import type { GrainPhotoItem, GrainPhotoValue } from '@/types/atproto/defineGrain';
import { useEffect, useState } from 'react';
import { useRecords } from './useRecords';

export function useGrainPhotos(limit = 20): FetchResult<GrainPhotoItem[]> {
  const { data: records, loading, error } = useRecords<GrainPhotoValue>(
    ATPROTO_COLLECTIONS.GRAIN_PHOTO,
  );

  const [data, setData] = useState<GrainPhotoItem[] | null>(null);

  useEffect(() => {
    if (loading || error || !records) return;

    const photos: GrainPhotoItem[] = records
      .slice(0, limit)
      .map((r) => ({
        uri: r.uri,
        alt: r.value.alt,
        blobUrl: buildCoverUrl(r.value.photo.ref.$link),
        createdAt: r.value.createdAt,
        aspectRatio: r.value.aspectRatio,
      }));

    setData(photos);
  }, [records, loading, error, limit]);

  return { data, loading, error };
}
