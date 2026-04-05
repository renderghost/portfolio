import { ATPROTO_COLLECTIONS } from '@/config/atproto';
import type { SifaLanguageValue } from '@/types/atproto';
import type { FetchResult } from '@/types/atproto';
import { useRecords } from './useRecords';

export function useSifaLanguages(): FetchResult<SifaLanguageValue[]> {
  const { data: records, loading, error } = useRecords<SifaLanguageValue>(
    ATPROTO_COLLECTIONS.LANGUAGE,
  );

  if (loading || error || !records) {
    return { data: null, loading, error };
  }

  return {
    data: records.map((r) => r.value),
    loading: false,
    error: null,
  };
}
