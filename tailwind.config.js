/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // Matches system preferences
  theme: {
    extend: {
      colors: {
        bones: {
          black: '#000',
          white: '#fff',
          blue: '#0011ff',
          mediumblue: '#0000cd',
          smokewhite: '#f5f5f5',
          aliceblue: '#f0f8ff',
          aqua: '#00ffff',
          gold: '#ffd700',
          transparent: 'transparent'
        },
        neutral: {
          100: '#ffffff',
          0: '#000000',
        },
        attention: {
          500: '#facc15',
        },
        brand: {
          50: '#F5F5FF',
          100: '#E5E5FF',
          200: '#CCCCFF',
          300: '#A8A8FF',
          400: '#7A7AFF',
          500: '#0000FF',
          600: '#0000EB',
          700: '#0000C2',
          800: '#0000AD',
          900: '#000066',
          950: '#000033',
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