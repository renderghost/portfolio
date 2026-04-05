/**
 * Standard site collection type definitions
 * Types for site.standard.publication and site.standard.document
 */

import type { ATProtocolBlob, ATProtocolRecord } from './defineBase';

/**
 * Standard publication record value structure
 */
export interface StandardPublicationValue {
  $type: string;
  name: string;
  url: string; // full base URL, e.g. "https://blento.app/did:plc:..."
  icon?: ATProtocolBlob;
  description?: string;
}

/**
 * A single content block inside a linearDocument page
 */
export interface StandardContentBlock {
  $type: string;
  block: {
    $type: string;
    image?: ATProtocolBlob;
    plaintext?: string;
    [key: string]: unknown;
  };
}

/**
 * A page inside the document content
 */
export interface StandardContentPage {
  id: string;
  $type: string;
  blocks?: StandardContentBlock[];
}

/**
 * Nested content object
 */
export interface StandardDocumentContent {
  $type: string;
  pages?: StandardContentPage[];
}

/**
 * Standard document record value structure
 */
export interface StandardDocumentValue {
  $type: string;
  title: string;
  path: string;
  site: string; // AT URI reference to site.standard.publication
  tags?: string[];
  description?: string;
  publishedAt?: string;
  content?: StandardDocumentContent;
}

/**
 * Full Standard publication record
 */
export type ATProtocolStandardPublication =
  ATProtocolRecord<StandardPublicationValue>;

/**
 * Full Standard document record
 */
export type ATProtocolStandardDocument =
  ATProtocolRecord<StandardDocumentValue>;
