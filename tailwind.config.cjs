/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const plugins = [require("daisyui")];
export const daisyui = {
  themes: [
    {
      'light': {
      'primary': '##71f998',
      'secondary': '#fddbce',
      'accent': '#4d0af5',
      'neutral': '#ffffff',
      'base-100': '#ffffff',
      'info': '',
      'warning': '',
      'success': '',
      'error': ''
    },
  },
    {
      'dark': {
      'primary': '#71f998',
      'secondary': '#310f02',
      'accent': '#b89dfb',
      'neutral': '#2c0e02',
      'base-100': '#2c0e02',
      'info': '',
      'warning': '',
      'success': '',
      'error': ''
    },
  }

  ]
};

