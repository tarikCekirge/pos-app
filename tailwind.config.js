/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      gridTemplateColumns: {
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
}