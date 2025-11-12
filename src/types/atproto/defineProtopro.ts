/**
 * Protopro collection type definitions
 * Types for blue.protopro.actor.profile
 */

import type { ATProtocolRecord } from './defineBase';

/**
 * Language proficiency structure
 */
export interface LanguageProficiency {
  code: string;
  level: number;
}

/**
 * Job history entry structure
 */
export interface JobHistoryEntry {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

/**
 * Actor Profile record value structure
 */
export interface ProfileValue {
  name: string;
  skills: string[];
  overview?: string;
  languages?: LanguageProficiency[];
  jobHistory?: JobHistoryEntry[];
  socialLinks?: string[];
  educationHistory?: unknown[];
  updatedAt?: string;
  $type: string;
}

/**
 * Full Profile record
 */
export type ATProtocolProfile = ATProtocolRecord<ProfileValue>;
