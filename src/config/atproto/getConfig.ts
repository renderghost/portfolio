/** AT Protocol configuration Centralized configuration for connecting to AT Protocol PDS */

export const ATPROTO_CONFIG = {
  /** Your DID (Decentralized Identifier) */
  DID: 'did:plc:s2rczyxit2v5vzedxqs326ri',

  /** PDS (Personal Data Server) URL */
  PDS_URL: 'https://eurosky.social',

  /** Bluesky CDN URL for blob storage (images, etc.) */
  CDN_URL: 'https://cdn.bsky.app',
} as const;

/**
 * Allowlist of site.standard.publication rkeys whose documents are permitted to appear on the writing page. Any
 * document whose publication rkey is not in this list is filtered out.
 */
export const ALLOWED_PUBLICATION_RKEYS: ReadonlySet<string> = new Set([
  '3lz3s33asuc2l',
  '3lzdlebwri22i',
  '3m2jpv5avx22n',
  // '3m4di6yzkt22z', // Marginalia
  '3mihld7aab22v',
]);

/** Collection identifiers for AT Protocol records */
export const ATPROTO_COLLECTIONS = {
  STANDARD_PUBLICATION: 'site.standard.publication',
  STANDARD_DOCUMENT: 'site.standard.document',
  POSITION: 'id.sifa.profile.position',
  SKILL: 'id.sifa.profile.skill',
  LANGUAGE: 'id.sifa.profile.language',
  BOOKHIVE_BOOK: 'buzz.bookhive.book',
  GRAIN_PHOTO: 'social.grain.photo',
} as const;
