export type BadgeProjectVariant = 'role' | 'artwork' | 'status';

export interface BadgeProjectProps {
  label: string;
  variant: BadgeProjectVariant;
}
