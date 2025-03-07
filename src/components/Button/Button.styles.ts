export const buttonBaseStyles = `
  inline-flex items-center justify-center font-medium rounded-md focus:outline-none
  transition-transform ease-in-out duration-200 focus:ring-4 focus:ring-offset-2
  focus:ring-yellow-500 dark:focus:ring-yellow-400
`;

export const buttonSizeStyles = {
  small: 'px-3 py-1 text-sm',
  normal: 'px-4 py-2',
  large: 'px-5 py-3 text-lg',
};

export const buttonShapeStyles = {
  label: 'rounded-md',
  icon: 'rounded-full p-2',
};

export const buttonVariantStyles = {
  primary: `
    bg-bones-mediumblue text-white hover:bg-bones-blue
    dark:bg-brand-400 dark:text-neutral-900 dark:hover:bg-brand-500
  `,
  secondary: `
    bg-brand-50 text-brand-700 border border-brand-500 hover:bg-brand-100
    dark:bg-neutral-800 dark:text-brand-400 dark:border-brand-400 dark:hover:bg-neutral-700
  `,
  label: `
    bg-transparent text-brand-500 hover:text-brand-600
    dark:text-brand-400 dark:hover:text-brand-500
  `,
};

export const hoverAnimation = `
  hover:scale-[1.02] transition-transform ease-in-out duration-200
`;
