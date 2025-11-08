/**
 * AT Protocol configuration
 * Centralized configuration for connecting to AT Protocol PDS
 */

export const ATPROTO_CONFIG = {
  /** Your DID (Decentralized Identifier) */
  DID: 'did:plc:s2rczyxit2v5vzedxqs326ri',

  /** PDS (Personal Data Server) URL */
  PDS_URL: 'https://rooter.us-west.host.bsky.network',

  /** Bluesky CDN URL for blob storage (images, etc.) */
  CDN_URL: 'https://cdn.bsky.app',
} as const;

/**
 * Collection identifiers for AT Protocol records
 */
export const ATPROTO_COLLECTIONS = {
  PUBLICATION: 'pub.leaflet.publication',
  DOCUMENT: 'pub.leaflet.document',
} as const;
