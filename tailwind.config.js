/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      white: "#FFFFFF",
      purple: "#472BFD",
      black: "#0B0B0B",
      grayBlack: "#403B3B",
      brownBlack: "#241C15",
      gray: "#5E5E5E",
      optionalBlack: "#121212",
      blue: "#3557E9",


  },
  extend: {},
  },
  plugins: [],
}