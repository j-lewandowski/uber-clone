/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        uber: 'Uber',
        uberBold: 'Uber-bold',
      },
    },
  },
  plugins: [],
};
