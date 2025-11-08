/**
 * Base content type definitions
 * Common fields shared across all content types
 */

export interface BaseContent {
  slug: string;
  collectionId: string;
  itemId: string;
  createdOn: string;
  updatedOn: string;
  publishedOn: string;
}
