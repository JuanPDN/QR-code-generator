/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html",
    "./src/*/*.js"
  ],
  theme: {
    colors: {
      F2F5F9: "#F2F5F9",
      "3662E3": "#3662E3",
      111729: "#111729",
      "040515": "#040515",
      364153: "#364153",
      "4D78ED": "#4D78ED",
      "1E2C51": "#1E2C51"
    },
    fontFamily: {
      outfit: ['"Outfit"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg": 'url("../assets/bg-illustration.svg")',
      },
    },
  },
  plugins: [],
};
