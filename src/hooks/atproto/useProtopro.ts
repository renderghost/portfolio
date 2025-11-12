import { useEffect, useState } from 'react';
import type { FetchResult, JobHistoryEntry, LanguageProficiency, ProfileValue } from '@/types/atproto';
import { useRecords } from './useRecords';

/**
 * Profile data from Protopro collection
 */
export interface Profile {
  overview?: string;
  jobHistory: JobHistoryEntry[];
  languages: LanguageProficiency[];
  skills: string[];
  educationHistory: unknown[];
}

/**
 * Hook for fetching Protopro actor profile from AT Protocol
 * Fetches from blue.protopro.actor.profile collection
 * Returns: overview, jobHistory, languages, skills, educationHistory
 *
 * @returns FetchResult with profile data
 *
 * @example
 * ```tsx
 * const { data: profile, loading, error } = useProtopro();
 *
 * if (loading) return <div>Loading...</div>;
 * if (error) return <div>Error: {error}</div>;
 *
 * return (
 *   <div>
 *     {profile?.jobHistory.map(job => <JobCard key={job.company} job={job} />)}
 *   </div>
 * );
 * ```
 */
export function useProtopro(): FetchResult<Profile | null> {
  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useRecords<ProfileValue>('blue.protopro.actor.profile');

  const [data, setData] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (profileLoading) {
      setLoading(true);
      return;
    }

    if (profileError) {
      setError(profileError);
      setLoading(false);
      return;
    }

    if (!profileData || profileData.length === 0) {
      setLoading(false);
      return;
    }

    try {
      // Get the first (and likely only) profile record
      const profileRecord = profileData[0];
      const profileValue = profileRecord.value;

      const profile: Profile = {
        overview: profileValue.overview,
        jobHistory: profileValue.jobHistory || [],
        languages: profileValue.languages || [],
        skills: profileValue.skills || [],
        educationHistory: profileValue.educationHistory || [],
      };

      setData(profile);
      setError(null);
    } catch (err) {
      console.error('Error processing profile data:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [profileData, profileLoading, profileError]);

  return { data, loading, error };
}
