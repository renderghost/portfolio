import { useEffect, useState } from 'react';
import { ALLOWED_PUBLICATION_RKEYS, ATPROTO_COLLECTIONS, buildBlobUrl, buildCoverUrl } from '@/config/atproto';
import type {
  ATProtocolStandardDocument,
  ATProtocolStandardPublication,
  FetchResult,
} from '@/types/atproto';
import { useRecords } from './useRecords';

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
  coverImage?: string;
  publishedAt: string;
  articleUrl: string;
  publication: Publication;
}

/**
 * Extracts the cover image URL from the first image block in a document's content.
 * The cover image is the first pub.leaflet.blocks.image block encountered.
 */
function extractCoverImage(
  doc: ATProtocolStandardDocument['value'],
): string | undefined {
  const pages = doc.content?.pages;
  if (!pages) return undefined;

  for (const page of pages) {
    for (const entry of page.blocks ?? []) {
      if (
        entry.block.$type === 'pub.leaflet.blocks.image' &&
        entry.block.image
      ) {
        return buildCoverUrl(entry.block.image.ref.$link);
      }
    }
  }

  return undefined;
}

/**
 * Hook for fetching Standard site publications and their associated documents.
 * Fetches from site.standard.publication and site.standard.document collections.
 * Automatically resolves publication references in documents.
 *
 * @returns FetchResult with combined documents and publications data
 *
 * @example
 * ```tsx
 * const { data: posts, loading, error } = useLeaflet();
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
export function useLeaflet(): FetchResult<Document[]> {
  const {
    data: publicationsData,
    loading: publicationsLoading,
    error: publicationsError,
  } = useRecords<ATProtocolStandardPublication['value']>(
    ATPROTO_COLLECTIONS.STANDARD_PUBLICATION,
  );

  const {
    data: documentsData,
    loading: documentsLoading,
    error: documentsError,
  } = useRecords<ATProtocolStandardDocument['value']>(
    ATPROTO_COLLECTIONS.STANDARD_DOCUMENT,
  );

  const [data, setData] = useState<Document[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (publicationsLoading || documentsLoading) {
      setLoading(true);
      return;
    }

    if (publicationsError || documentsError) {
      setError(publicationsError || documentsError);
      setLoading(false);
      return;
    }

    if (!publicationsData || !documentsData) {
      setLoading(false);
      return;
    }

    try {
      // Build publication lookup by URI
      const publicationMap = new Map<string, Publication>();
      publicationsData.forEach((record) => {
        const iconUrl = record.value.icon
          ? buildBlobUrl(record.value.icon.ref.$link)
          : undefined;

        publicationMap.set(record.uri, {
          uri: record.uri,
          name: record.value.name,
          basePath: record.value.url,
          icon: iconUrl,
          description: record.value.description,
        });
      });

      // Transform documents
      const documents: Document[] = documentsData
        .map((record) => {
          const publication = publicationMap.get(record.value.site);

          if (!publication) {
            console.warn(`Publication not found for document: ${record.uri}`);
            return null;
          }

          // path already includes a leading slash, e.g. "/3m75kss5jfs2z"
          // basePath is the full URL (e.g. "https://blento.app/did:plc:...")
          const slug = record.value.path.replace(/^\//, '');
          const articleUrl = `${publication.basePath}${record.value.path}`;
          const coverImage = extractCoverImage(record.value);

          return {
            uri: record.uri,
            slug,
            title: record.value.title,
            description: record.value.description,
            coverImage,
            publishedAt: record.value.publishedAt ?? record.uri,
            articleUrl,
            publication,
          } as Document;
        })
        .filter((doc): doc is Document => {
          if (doc === null) return false;
          const rkey = doc.publication.uri.split('/').pop() ?? '';
          return ALLOWED_PUBLICATION_RKEYS.has(rkey);
        })
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        );

      setData(documents);
      setError(null);
    } catch (err) {
      console.error('Error processing publications and documents:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [
    publicationsData,
    documentsData,
    publicationsLoading,
    documentsLoading,
    publicationsError,
    documentsError,
  ]);

  return { data, loading, error };
}
