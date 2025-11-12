/**
 * Heading Styles
 *
 * Uses the global typography system with fluid type scaling. All headings are bold (font-weight: 700) by default.
 *
 * Size prop controls visual appearance independent of semantic level. Example: <Heading level={3} size="xl"> renders an
 * h3 with xl styling
 */
export const HeadingStyles = {
  base: 'font-dm-sans',
  sizes: {
    sm: 'heading-sm',
    md: 'heading-md',
    lg: 'heading-lg',
    xl: 'heading-xl',
    '2xl': 'heading-2xl',
  },
} as const;
