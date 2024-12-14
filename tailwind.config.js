/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-1231': '1231px', // Custom breakpoint for 1231px
      },
    },
  },
  plugins: [],
}

