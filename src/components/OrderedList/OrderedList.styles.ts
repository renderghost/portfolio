/**
 * OrderedList Styles
 *
 * Provides different numbering styles using CSS list-style-type.
 */

export const listBase = 'list-inside space-y-2';

export const numberStyles = {
  decimal: 'list-decimal',
  'lower-alpha': 'list-[lower-alpha]',
  'upper-alpha': 'list-[upper-alpha]',
  'lower-roman': 'list-[lower-roman]',
  'upper-roman': 'list-[upper-roman]',
} as const;
