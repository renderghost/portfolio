/**
 * Base AT Protocol type definitions
 * Generic types used across all AT Protocol collections
 */

/**
 * AT Protocol Blob reference
 * Used for binary data like images
 */
export interface ATProtocolBlob {
  $type: 'blob';
  ref: {
    $link: string;
  };
  mimeType: string;
  size: number;
}

/**
 * Base AT Protocol record structure
 */
export interface ATProtocolRecord<T = unknown> {
  uri: string;
  cid: string;
  value: T;
}

/**
 * Response from listRecords XRPC endpoint
 */
export interface ListRecordsResponse<T = unknown> {
  records: ATProtocolRecord<T>[];
  cursor?: string;
}

/**
 * Generic fetch result with loading and error states
 */
export interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
