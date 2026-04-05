export const CATEGORY_LABELS: Record<string, string> = {
  creative: 'Creative',
  business: 'Business',
  interpersonal: 'Interpersonal',
  other: 'Other',
};

export function formatCategory(category: string): string {
  return (
    CATEGORY_LABELS[category] ??
    category.replace(/\b\w/g, (c) => c.toUpperCase())
  );
}
