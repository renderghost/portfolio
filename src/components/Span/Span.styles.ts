/**
 * Span Styles
 *
 * Uses the global typography system with fluid type scaling.
 * Spans inherit font-weight from parent by default.
 * Use for inline text that needs specific sizing.
 */
export const spanStyles = {
  base: 'font-dm-sans',
  sizes: {
    sm: 'type-sm',   // 14px → 16px fluid
    md: 'type-md',   // 16px → 18px fluid
    lg: 'type-lg',   // 18px → 24px fluid
    xl: 'type-xl',   // 24px → 36px fluid
    '2xl': 'type-2xl', // 36px → 64px fluid
  },
} as const;
