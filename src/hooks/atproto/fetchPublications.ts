import { useEffect, useState } from 'react';
import { ATPROTO_COLLECTIONS, buildBlobUrl } from '@/config/atproto';
import type { ATProtocolDocument, ATProtocolPublication, FetchResult } from '@/types/atproto';
import { fetchRecords } from './fetchRecords';

/**
 * Publication data with resolved metadata
 */
export interface Publication {
  uri: string;
  name: string;
  basePath: string;
  icon?: string;
  description?: string;
}

/**
 * Document data with resolved publication metadata
 */
export interface Document {
  uri: string;
  slug: string;
  title: string;
  description?: string;
  publishedAt: string;
  articleUrl: string;
  publication: Publication;
}

/**
 * Hook for fetching publications and their associated documents
 * Automatically resolves publication references in documents
 *
 * @returns FetchResult with combined documents and publications data
 *
 * @example
 * ```tsx
 * const { data: posts, loading, error } = fetchPublications();
 *
 * if (loading) return <div>Loading...</div>;
 * if (error) return <div>Error: {error}</div>;
 *
 * return posts?.map(post => (
 *   <article key={post.uri}>
 *     <h2>{post.title}</h2>
 *     <p>{post.publication.name}</p>
 *   </article>
 * ));
 * ```
 */
export function fetchPublications(): FetchResult<Document[]> {
  const {
    data: publicationsData,
    loading: publicationsLoading,
    error: publicationsError,
  } = fetchRecords<ATProtocolPublication['value']>(ATPROTO_COLLECTIONS.PUBLICATION);

  const {
    data: documentsData,
    loading: documentsLoading,
    error: documentsError,
  } = fetchRecords<ATProtocolDocument['value']>(ATPROTO_COLLECTIONS.DOCUMENT);

  const [data, setData] = useState<Document[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Wait for both fetches to complete
    if (publicationsLoading || documentsLoading) {
      setLoading(true);
      return;
    }

    // Check for errors
    if (publicationsError || documentsError) {
      setError(publicationsError || documentsError);
      setLoading(false);
      return;
    }

    // Check if we have data
    if (!publicationsData || !documentsData) {
      setLoading(false);
      return;
    }

    try {
      // Create publication lookup map
      const publicationMap = new Map<string, Publication>();
      publicationsData.forEach((record) => {
        const iconUrl = record.value.icon ? buildBlobUrl(record.value.icon.ref.$link) : undefined;

        publicationMap.set(record.uri, {
          uri: record.uri,
          name: record.value.name,
          basePath: record.value.base_path,
          icon: iconUrl,
          description: record.value.description,
        });
      });

      // Transform documents with resolved publication data
      const documents: Document[] = documentsData
        .map((record) => {
          const slug = record.uri.split('/').pop() || '';
          const publication = publicationMap.get(record.value.publication);

          if (!publication) {
            console.warn(`Publication not found for document: ${record.uri}`);
            return null;
          }

          return {
            uri: record.uri,
            slug,
            title: record.value.title,
            description: record.value.description,
            publishedAt: record.value.publishedAt,
            articleUrl: `https://${publication.basePath}/${slug}`,
            publication,
          };
        })
        .filter((doc): doc is Document => doc !== null)
        // Sort by published date, newest first
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

      setData(documents);
      setError(null);
    } catch (err) {
      console.error('Error processing publications and documents:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [publicationsData, documentsData, publicationsLoading, documentsLoading, publicationsError, documentsError]);

  return { data, loading, error };
}
