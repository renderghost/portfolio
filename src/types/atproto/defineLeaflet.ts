/**
 * Leaflet collection type definitions
 * Types for pub.leaflet.publication and pub.leaflet.document
 */

import type { ATProtocolBlob, ATProtocolRecord } from './defineBase';

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
