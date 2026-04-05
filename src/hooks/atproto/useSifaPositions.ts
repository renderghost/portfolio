import { ATPROTO_COLLECTIONS } from '@/config/atproto';
import type { SifaPositionValue } from '@/types/atproto';
import { useEffect, useState } from 'react';
import type { FetchResult } from '@/types/atproto';
import { useRecords } from './useRecords';

export function useSifaPositions(): FetchResult<SifaPositionValue[]> {
  const {
    data: records,
    loading,
    error,
  } = useRecords<SifaPositionValue>(ATPROTO_COLLECTIONS.POSITION);

  const [data, setData] = useState<SifaPositionValue[] | null>(null);

  useEffect(() => {
    if (loading || error || !records) return;

    const positions = records
      .map((r) => r.value)
      .sort((a, b) => {
        // Current roles (no endedAt) first, then past roles newest-first
        const aIsCurrent = !a.endedAt;
        const bIsCurrent = !b.endedAt;
        if (aIsCurrent && !bIsCurrent) return -1;
        if (!aIsCurrent && bIsCurrent) return 1;
        const dateA = new Date(a.endedAt ?? a.startedAt).getTime();
        const dateB = new Date(b.endedAt ?? b.startedAt).getTime();
        return dateB - dateA;
      });

    setData(positions);
  }, [records, loading, error]);

  return { data, loading, error };
}
