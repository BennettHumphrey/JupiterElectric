/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "accent": "#605E5E",
        "background": "#FFFFFFEB",
        "background-overlay": "CCCCCC36",
        "header": "#207EA5",
        "sub-header": "#30BDFF"
      },
    },
  },
  plugins: [],
}

