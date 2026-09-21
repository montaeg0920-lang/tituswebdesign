/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F33",
        teal: "#0D9488",
        slate: "#172B4D",
        "off-white": "#F7F8FA",
      },
    },
  },
  plugins: [],
}
