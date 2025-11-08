/**
 * Aggregate content data type definitions
 */

import type { Article } from './defineArticles';
import type { CaseStudy } from './defineCaseStudies';
import type { Company } from './defineCompanies';
import type { Job } from './defineJobs';
import type { Skill } from './defineSkills';

export interface ContentData {
  companies: Company[];
  skills: Skill[];
  caseStudies: CaseStudy[];
  jobs: Job[];
  articles: Article[];
}

// Additional types for Next.js specific features
export type Params = {
  params: {
    slug: string;
  };
};

export type SearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};
