/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        druk: ['var(--font-druk)', 'var(--font-inter)', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 2.5s ease-in-out forwards',
      },
      
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
