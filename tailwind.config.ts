import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import fluidType from './plugins/fluidType';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // Solids
      transparent: '#00000000',

      // Mono
      black: '#000000',
      dimgray: '#696969',
      white: '#ffffff',
      whitesmoke: '#f2f0f0',

      // Blue
      blue: '#130DF2', //#0000ff
      cyan: '#00ffff',
      medlumblue: '#0000cd',

      // Green
      chartreuse: '#7fff00',
      darkgreen: '#006400',
      green: '#008000',

      // Yellow
      gold: '#ffd700',
      goldenrod: '#daa520',
      yellow: '#eaf100', //#ffff00

      // Red
      darkred: '#8b0000',
      firebrick: '#b22222',
      red: '#ff0000',

      // Rose
      indigo: '#4b0082',
      magenta: '#ff00ff',
      rebeccapurple: '#663399',

      // Opacity variants — black
      'black-03': '#00000008',
      'black-06': '#0000000f',
      'black-10': '#0000001a',
      'black-16': '#00000029',
      'black-24': '#0000003d',
      'black-38': '#00000061',
      'black-61': '#0000009c',
      'black-76': '#000000c2',
      'black-83': '#000000d4',
      'black-90': '#000000e5',

      // Opacity variants — blue
      'blue-03': '#130DF208',
      'blue-06': '#130DF20f',
      'blue-10': '#130DF21a',
      'blue-16': '#130DF229',
      'blue-24': '#130DF23d',
      'blue-38': '#130DF261',
      'blue-61': '#130DF29c',
      'blue-76': '#130DF2c2',
      'blue-83': '#130DF2d4',
      'blue-90': '#130DF2e5',

      // Opacity variants — white
      'white-03': '#ffffff08',
      'white-06': '#ffffff0f',
      'white-10': '#ffffff1a',
      'white-16': '#ffffff29',
      'white-24': '#ffffff3d',
      'white-38': '#ffffff61',
      'white-61': '#ffffff9c',
      'white-76': '#ffffffc2',
      'white-83': '#ffffffd4',
      'white-90': '#ffffffe5',
    },
    fontFamily: {
      display: ['DM Serif Display', 'serif'],
      mono: ['DM Mono', 'monospace'],
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Text', 'serif'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    spacing: {
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '14': '14px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
      '72': '72px',
      '80': '80px',
      '88': '88px',
      '96': '96px',
      '128': '128px',
    },
    borderRadius: {
      sharp: '0px',
      softest: '2px',
      softer: '4px',
      soft: '8px',
      circular: '1000px',
    },
  },
  plugins: [
    typography,
    fluidType(),
  ],
} satisfies Config;
