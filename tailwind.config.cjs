/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',

      gray: {
        100: '#E1E1E6',
        200: '#c4c4cc',
        400: '#7c7c8a',
        800: '#202024',
        900: '#121214',
      },

      cyan: {
        300: '#9BE1FB',
        500: '#81D8F7',
      },
    },

    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
