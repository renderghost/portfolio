/**
 * Code Styles
 *
 * Uses the global typography system with fluid type scaling.
 * All code uses DM Mono font (monospace).
 * Supports inline and block variants.
 */
export const codeStyles = {
  base: 'font-normal font-dm-mono',
  variants: {
    inline: 'code-inline px-1.5 py-0.5 rounded bg-bones-black-5 dark:bg-bones-white-10',
    block: 'code-block block p-4 rounded-lg bg-bones-black-5 dark:bg-bones-white-10 overflow-x-auto',
  },
} as const;
