/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '440px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "main": "#605E5E",
        "background": "#FFFFFFDD",
        "nav-background": "#207EA595",
        "background-overlay": "#CCCCCC36",
        "accent": "#207EA5",
        "secondary-accent": "#30BDFF"
      },
    },
  },
  plugins: [],
}

