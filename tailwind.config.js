/** @type {import('tailwindcss').Config} */
export default
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'small-component': "url('/src/assets/delivery.jpg')",
        },
      }
    },
    plugins: [require('daisyui')]
  }

