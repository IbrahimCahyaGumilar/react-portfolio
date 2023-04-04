/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5bbdff',
        secondary: '#5badff',
      }
    },

    fontFamily: {
      logo: ['Caveat'],
      navbar: ['Oswald'],
    },
    
  },
  plugins: [],
}
