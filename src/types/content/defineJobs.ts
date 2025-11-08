/**
 * Job and role type definitions
 */

import type { BaseContent } from './defineBase';

export interface Job extends BaseContent {
  jobTitle: string;
  company: string;
  jobDescription: string;
  userNeed: string;
  startDate: string;
  endDate?: string;
  employmentType: 'Contract' | 'Full-time';
  skills: string[];
  caseStudies?: string[];
  client?: string;
  cover?: string;
}
