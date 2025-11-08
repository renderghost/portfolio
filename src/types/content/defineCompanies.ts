/**
 * Company and client type definitions
 */

import type { BaseContent } from './defineBase';

export interface Company extends BaseContent {
  name: string;
  website?: string;
  type?: 'B2B' | 'B2C';
  industry: string;
  city: string;
  country: string;
  logo?: string;
}
