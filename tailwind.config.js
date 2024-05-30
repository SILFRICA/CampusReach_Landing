/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green-500': '#00CAAC',
        'forest-green-900': '#081A16',
        'cr-light-green': '#E3FFE9',
        'cr-soft-green': '#74D88A',
        'cr-gray-200': '#FAFAFA',
        'cr-gray-300': '#EAE3FF',
        'cr-gray-600': '#575757',
        'cr-yellow-200': '#FDFFE3',
        'cr-pink-300': '#FFE3E3',
      },
    },
  },
  plugins: [],
}
