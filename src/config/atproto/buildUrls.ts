import { ATPROTO_CONFIG } from './getConfig';

/**
 * Constructs the XRPC URL for listing records from a collection
 */
export function buildRecordsUrl(collection: string, repo: string = ATPROTO_CONFIG.DID): string {
  return `${ATPROTO_CONFIG.PDS_URL}/xrpc/com.atproto.repo.listRecords?repo=${repo}&collection=${collection}`;
}

/**
 * Constructs the CDN URL for a blob (image)
 */
export function buildBlobUrl(blobRef: string, did: string = ATPROTO_CONFIG.DID): string {
  return `${ATPROTO_CONFIG.CDN_URL}/img/avatar/plain/${did}/${blobRef}@jpeg`;
}

/**
 * Constructs the CDN URL for an article cover image
 */
export function buildCoverUrl(blobRef: string, did: string = ATPROTO_CONFIG.DID): string {
  return `${ATPROTO_CONFIG.CDN_URL}/img/feed_thumbnail/plain/${did}/${blobRef}@jpeg`;
}

/**
 * Constructs the PDS blob URL for blobs stored on a non-bsky PDS
 */
export function buildPdsBlobUrl(cid: string, did: string = ATPROTO_CONFIG.DID): string {
  return `${ATPROTO_CONFIG.PDS_URL}/xrpc/com.atproto.sync.getBlob?did=${did}&cid=${cid}`;
}
