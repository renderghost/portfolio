/**
 * Sifa AT Protocol type definitions
 * Types for id.sifa.profile.* collections
 */

export interface SifaSkillRef {
  cid: string;
  uri: string;
}

/**
 * Value type for id.sifa.profile.position records
 */
export interface SifaLocation {
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
}

export interface SifaSkillValue {
  $type: 'id.sifa.profile.skill';
  name: string;
  category?: string;
  createdAt: string;
}

export interface SifaLanguageValue {
  $type: 'id.sifa.profile.language';
  name: string;
  proficiency: string;
  createdAt: string;
}

export interface SifaPositionValue {
  $type: 'id.sifa.profile.position';
  company: string;
  title: string;
  description?: string;
  employmentType?: string;
  startedAt: string;
  endedAt?: string;
  location?: SifaLocation;
  skills?: SifaSkillRef[];
  isPrimary?: boolean;
}
