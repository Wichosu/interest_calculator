/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0%)'},
        },
      },
      animation: {
        slide: 'slide 150ms ease-in-out',
      }
    },
  },
  plugins: [],
}
