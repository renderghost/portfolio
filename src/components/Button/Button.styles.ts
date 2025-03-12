export const ButtonStyles = {
  variants: {
    primary: 'text-2xl tracking-wider border-2 font-bold px-8 py-4 transition-colors duration-200',
    secondary: 'text-2xl tracking-wide border-2 font-bold px-8 py-4 transition-colors duration-200',
  },
  themes: {
    mono: 'bg-bones-white dark:bg-bones-black text-bones-black dark:text-bones-white border-bones-black dark:border-bones-white',
    gray: 'bg-bones-whitesmoke dark:bg-bones-dimgray text-bones-black border-bones-black',
    yellow:
      'bg-bones-yellow hover:bg-bones-gold dark:bg-bones-gold hover:dark:bg-bones-yellow text-bones-black border-bones-black',
    blue: 'bg-bones-blue hover:bg-bones-mediumblue dark:bg-bones-mediumblue hover:dark:bg-bones-blue text-bones-white border-bones-white',
    red: 'bg-bones-red dark:bg-bones-darkred text-bones-white border-bones-white',
    purple: 'bg-bones-rebeccapurple dark:bg-bones-indigo text-bones-white border-bones-white',
  },
} as const;

export type SectionTheme = keyof typeof ButtonStyles.themes;
