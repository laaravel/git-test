/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        silver: 'silver',
        darkgray: 'darkgray',
        bgErr: 'rgb(77, 73, 100)',
        bgText: 'rgb(252, 252, 252)',
        bgGray: '#dddddd'
      }
    },
  },
  plugins: [],
}