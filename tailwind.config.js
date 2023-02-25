/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1c2128",
        primary: "#adbac7",
        secondary: "#2d333b",
        tertiary: "#22272e",
      },
      borderColor: {
        primary: "#444c56",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },

  plugins: [],
};
