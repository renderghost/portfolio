import { useEffect, useState } from 'react';
import { buildRecordsUrl } from '@/config/atproto';
import type { ATProtocolRecord, FetchResult, ListRecordsResponse } from '@/types/atproto';

/**
 * Generic hook for fetching records from any AT Protocol collection
 *
 * @param collection - The collection identifier (e.g., 'pub.leaflet.publication')
 * @param repo - Optional repo DID (defaults to configured DID)
 * @returns FetchResult with records data, loading state, and error
 *
 * @example
 * ```tsx
 * const { data: publications, loading, error } = fetchRecords<PublicationValue>(
 *   'pub.leaflet.publication'
 * );
 * ```
 */
export function fetchRecords<T = unknown>(collection: string, repo?: string): FetchResult<ATProtocolRecord<T>[]> {
  const [data, setData] = useState<ATProtocolRecord<T>[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = buildRecordsUrl(collection, repo);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch records from collection: ${collection}`);
        }

        const data: ListRecordsResponse<T> = await response.json();
        setData(data.records);
      } catch (err) {
        console.error(`Error fetching AT Protocol records from ${collection}:`, err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, [collection, repo]);

  return { data, loading, error };
}
