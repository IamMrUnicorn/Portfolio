/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const plugins = [require("daisyui")];
export const daisyui = {
  themes: [
    {
      'light': {
      'primary': '#f26eb0',
      'secondary': '#9eff9e',
      'accent': '#10bc66',
      'neutral': '#ffffff',
      'base-100': '#ffffff',
      'info': '#fddbce',
      'warning': '',
      'success': '#4d0af5',
      'error': ''
    },
  },
  {
    'dark': {
      'primary': '#f26eb0',
      'secondary': '#000500',
      'accent': '#72f3b3',
      'neutral': '#1c021c',
      'base-100': '#1c021c',
      'info': '',
      'warning': '',
      'success': '',
      'error': ''
    },
  }

  ]
};

