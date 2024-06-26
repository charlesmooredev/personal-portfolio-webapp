/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
        sorority: {
          50: '#fef2f3',
          100: '#fde6e8',
          200: '#fbd0d7',
          300: '#f8a9b6',
          400: '#f37990',
          500: '#e84063',
          600: '#d52955',
          700: '#b41c47',
          800: '#971a42',
          900: '#811a3e',
          950: '#48091d',
        },
        mobsters: {
          50: '#ffeeee',
          100: '#ffdada',
          200: '#ffbbbb',
          300: '#ff8b8b',
          400: '#ff4949',
          500: '#ff1111',
          600: '#ff0000',
          700: '#e70000',
          800: '#be0000',
          900: '#900000',
          950: '#560000',
        },
      },
    },
  },
  plugins: [],
}
