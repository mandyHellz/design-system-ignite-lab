/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      'gray-100': '#E1E1E6',
      'gray-200': '#c4c4cc',
      'gray-400': '#7c7c8a',
      'gray-800': '#202024',
      'gray-900': '#121214',

      'cyan-300': '#9BE1FB',
      'cyan-500': '#81D8F7',
    },

    fontSize: {
      xs: 14,
      sm: 16,
      medium: 18,
      large: 20,
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
