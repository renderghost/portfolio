// Button inherits from page theme context
// Buttons use semi-transparent backgrounds with borders matching the page theme rules
export const buttonBase = 'text-2xl font-bold px-8 py-4 transition-colors duration-200 border-2';

export const buttonVariants = {
  primary: 'tracking-wider',
  secondary: 'tracking-wide',
} as const;
