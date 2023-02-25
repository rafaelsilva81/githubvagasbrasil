/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1c2128",
        primary: "#adbac7",
        contrast: "#2d333b",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },

  plugins: [],
};
