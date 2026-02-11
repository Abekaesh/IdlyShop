/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF5',
          100: '#C2D1E8',
          200: '#9BB3D9',
          300: '#7494C9',
          400: '#557EBD',
          500: '#3A68B0',
          600: '#2F5592',
          700: '#254272',
          800: '#1B3052',
          900: '#0F172A',
        },
        accent: {
          50: '#FFF5E6',
          100: '#FFE5C2',
          200: '#FFD699',
          300: '#FFC670',
          400: '#FFB847',
          500: '#FFAA1E',
          600: '#D18800',
          700: '#A36800',
          800: '#754900',
          900: '#472C00',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};