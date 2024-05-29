/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whitish-blue': '#f0f8ff', // Adjust as needed
        'navy-900': '#1c3d5a',
        'navy-700': '#2c5a77',
        'coral': '#ff6f61',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in': 'slideIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
