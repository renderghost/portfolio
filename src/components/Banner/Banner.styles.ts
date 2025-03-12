export const bannerStyles = {
  base: 'fixed top-0 start-0 z-50 flex justify-between w-full p-4',
  themes: {
    yellow: 'bg-bones-yellow dark:bg-bones-gold text-bones-black border-gray-200 dark:border-gray-600',
    gray: 'bg-bones-whitesmoke dark:bg-bones-black text-bones-black dark:text-bones-white border-gray-200 dark:border-gray-600',
    blue: 'bg-bones-blue dark:bg-bones-mediumblue text-bones-white border-blue-600 dark:border-blue-500',
    red: 'bg-bones-red dark:bg-bones-darkred text-bones-white border-red-600 dark:border-red-500',
    purple: 'bg-bones-rebeccapurple dark:bg-bones-indigo text-bones-white border-purple-600 dark:border-purple-500',
    mono: 'bg-bones-white dark:bg-bones-black text-bones-black dark:text-bones-white border-gray-300 dark:border-gray-700',
  },
} as const;
