/**
 * Mark Styles
 *
 * Uses the global typography system with fluid type scaling.
 * Highlights text with background color (default yellow).
 * Inherits font family and weight from parent.
 */
export const markStyles = {
  base: 'bg-bones-yellow text-bones-black',
  sizes: {
    sm: 'type-sm',   // 14px → 16px fluid
    md: 'type-md',   // 16px → 18px fluid
    lg: 'type-lg',   // 18px → 24px fluid
    xl: 'type-xl',   // 24px → 36px fluid
    '2xl': 'type-2xl', // 36px → 64px fluid
  },
} as const;
