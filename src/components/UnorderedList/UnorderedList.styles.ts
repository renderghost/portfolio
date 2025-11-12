/**
 * UnorderedList Styles
 *
 * Provides different bullet styles using CSS list-style-type. Custom bullets use unicode glyphs for consistent
 * cross-browser rendering.
 */

export const listBase = 'list-outside';

export const bulletStyles = {
  disc: "[&>li]:list-['•']",
  circle: "[&>li]:list-['◦']",
  square: "[&>li]:list-['▪']",
  arrow: "[&>li]:list-['➝']",
  dash: "[&>li]:list-['–']",
  angle: "[&>li]:list-['›']",
} as const;
