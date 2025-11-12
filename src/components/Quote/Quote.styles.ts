/**
 * Quote Styles
 *
 * Uses the global typography system with fluid type scaling.
 * Blockquotes use DM Serif Display font and are italicized by default.
 * Normal weight (400) for elegant readability.
 */
export const quoteStyles = {
  base: 'font-normal font-dm-serif italic',
  sizes: {
    md: 'quote-md',  // 18px → 24px fluid, serif, italic
    lg: 'quote-lg',  // 24px → 36px fluid, serif, italic
    xl: 'quote-xl',  // 36px → 64px fluid, sans, italic
  },
} as const;
