/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // Matches system preferences
  theme: {
    extend: {
      colors: {
        bones: {
          // Monos
          black: 'black',
          white: 'white',
          whitesmoke: 'whitesmoke',
          // Yellows
          yellow: 'yellow',
          gold: 'gold',
          goldenrod: 'goldenrod',
          // Blues
          cyan: 'cyan',
          blue: 'blue',
          mediumblue: 'mediumblue',
          // Reds
          red: 'red',
          firebrick: 'firebrick',
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
  plugins: [],
};