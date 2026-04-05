export const PROFICIENCY_LABELS: Record<string, string> = {
  native: 'Native',
  full_professional: 'Full Professional',
  professional_working: 'Professional Working',
  limited_working: 'Limited Working',
  elementary: 'Elementary',
};

export function formatProficiency(proficiency: string): string {
  return (
    PROFICIENCY_LABELS[proficiency] ??
    proficiency
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}
