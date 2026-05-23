/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e9deff',
          300: '#d4beff',
          400: '#b893ff',
          500: '#9c66ff',
          600: '#8640ff',
          700: '#7228f5',
          800: '#5f1fd1',
          900: '#4e1caa',
          950: '#310f72',
        },
        paw: {
          50: '#fff8ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
    },
  },
  plugins: [],
};
