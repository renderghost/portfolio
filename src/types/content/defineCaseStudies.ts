/**
 * Case study and project type definitions
 */

import type { BaseContent } from './defineBase';

export type ProjectType = 'design-operations' | 'design-strategy' | 'product-design' | 'service-design';

export interface CaseStudy extends BaseContent {
  name: string;
  summary: string;
  body?: string;
  pitchEmbed?: string;
  coverImage?: string;
  type: ProjectType;
  endDate: string;
  role: string;
  company: string;
  relevantSkills: string[];
}
