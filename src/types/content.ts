// src/types/content.ts

// Base interfaces for common fields
interface BaseContent {
	slug: string;
	collectionId: string;
	itemId: string;
	createdOn: string;
	updatedOn: string;
	publishedOn: string;
}

// Company/Client related types
export interface Company extends BaseContent {
	name: string;
	website?: string;
	type?: 'B2B' | 'B2C';
	industry: string;
	city: string;
	country: string;
	logo?: string;
}

// Skill category types
export type SkillType = 'design' | 'technical' | 'soft' | 'domain';

// Skills and competencies
export interface Skill extends BaseContent {
	name: string;
}

// Project/Case Study types
export type ProjectType =
	| 'design-operations'
	| 'design-strategy'
	| 'product-design'
	| 'service-design';

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

// Job/Role types
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

// Article types
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

// Type for aggregating all content
export interface ContentData {
	companies: Company[];
	skills: Skill[];
	caseStudies: CaseStudy[];
	jobs: Job[];
	articles: Article[];
}
