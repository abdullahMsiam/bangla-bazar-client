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
          'feature-component': "url('/src/assets/feature1.jpg')",
        },
      }
    },
    // eslint-disable-next-line no-undef
    plugins: [require('daisyui')]
  }

