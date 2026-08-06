/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // enables dark mode via a .dark class
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        rethink: ["Rethink Sans", "sans-serif"],
        instrument: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        brandBlue: "#2563eb",
        brandBlueLight: "#3b82f6",
        brandDark: "#121212",
      },
    },
  },
  plugins: [],
};
