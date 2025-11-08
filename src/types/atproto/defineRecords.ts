/**
 * AT Protocol record type definitions
 * Type-safe interfaces for AT Protocol data structures
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
 * Publication record value structure
 */
export interface PublicationValue {
  name: string;
  base_path: string;
  icon?: ATProtocolBlob;
  description?: string;
  $type: string;
}

/**
 * Document record value structure
 */
export interface DocumentValue {
  title: string;
  description?: string;
  publishedAt: string;
  publication: string; // URI reference to the publication
  $type: string;
}

/**
 * Full Publication record
 */
export type ATProtocolPublication = ATProtocolRecord<PublicationValue>;

/**
 * Full Document record
 */
export type ATProtocolDocument = ATProtocolRecord<DocumentValue>;

/**
 * Response from listRecords XRPC endpoint
 */
export interface ListRecordsResponse<T = unknown> {
  records: ATProtocolRecord<T>[];
  cursor?: string;
}
