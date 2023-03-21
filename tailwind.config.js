/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      customBlue: "#64A3F5",
      customRed: "#FD7E89",
      customYellow: "#FAEFA7",
      customGreen: "#9CE08B",
      customPurple: "#3c2f6d",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
