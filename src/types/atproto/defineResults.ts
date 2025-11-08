/**
 * AT Protocol fetch result types
 */

/**
 * Generic fetch result with loading and error states
 */
export interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
