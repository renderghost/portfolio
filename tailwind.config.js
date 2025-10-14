/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        serif: ['var(--font-dm-serif)'],
      },
      colors: {
        bones: {
          white: '#FFFFFF',
          black: '#000
          darkred: 'darkred',
          // Purples
          magenta: 'magenta',
          rebeccapurple: 'rebeccapurple',
          indigo: 'indigo',
          // Utilities
          transparent: 'transparent'
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
