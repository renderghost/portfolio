import { ATPROTO_COLLECTIONS } from '@/config/atproto';
import type { SifaSkillValue } from '@/types/atproto';
import type { FetchResult } from '@/types/atproto';
import { useRecords } from './useRecords';

export interface SkillsByCategory {
  category: string;
  skills: string[];
}

export function useSifaSkills(): FetchResult<SkillsByCategory[]> {
  const { data: records, loading, error } = useRecords<SifaSkillValue>(
    ATPROTO_COLLECTIONS.SKILL,
  );

  if (loading || error || !records) {
    return { data: null, loading, error };
  }

  const grouped = new Map<string, string[]>();

  for (const record of records) {
    const category = record.value.category ?? 'other';
    if (!grouped.has(category)) grouped.set(category, []);
    grouped.get(category)!.push(record.value.name);
  }

  const data: SkillsByCategory[] = Array.from(grouped.entries()).map(
    ([category, skills]) => ({ category, skills }),
  );

  return { data, loading: false, error: null };
}
