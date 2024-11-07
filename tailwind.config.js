/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Green': 'hsl(75, 94%, 57%)',
        'Grey700': 'hsl(0, 0%, 20%)',
        'Grey800': 'hsl(0, 0%, 12%)',
        'Grey900': 'hsl(0, 0%, 8%)'
      },
      fontFamily:{
        'Inter':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

