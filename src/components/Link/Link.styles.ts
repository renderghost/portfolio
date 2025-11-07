export const linkBaseStyles = `
  text-current focus:outline-none
  focus:ring-4 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-400
  transition ease-in-out duration-200
`;

export const underlineStyles = {
  none: 'no-underline',
  hover: 'hover:underline',
  always: 'underline',
};

export const underlinePositionStyles = {
  left: 'decoration-left',
  center: 'decoration-center',
  right: 'decoration-right',
};

export const colorVariantStyles = {
  current: '', // Default - uses current color
  blue: 'text-bones-blue hover:text-bones-mediumblue dark:text-bones-lightsteelblue dark:hover:text-bones-blue',
};
