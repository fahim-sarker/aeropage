import Container from 'postcss/lib/container';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth : {
      Container : "1120px"
    },
    fontFamily: {
      'pops': ['Poppins', 'sans-serif',]
    },
  },
}