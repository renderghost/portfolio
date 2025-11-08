/**
 * Article type definitions
 */

import type { BaseContent } from './defineBase';

export interface Article extends BaseContent {
  title: string;
  subtitle?: string;
  featured: boolean;
  coverImage?: string;
  articleUrl: string;
  published: string;
  publication: string;
  publicationUrl: string;
}
