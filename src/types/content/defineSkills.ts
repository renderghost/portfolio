/**
 * Skill and competency type definitions
 */

import type { BaseContent } from './defineBase';

export type SkillType = 'design' | 'technical' | 'soft' | 'domain';

export interface Skill extends BaseContent {
  name: string;
}
