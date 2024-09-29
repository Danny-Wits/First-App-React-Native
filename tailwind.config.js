/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FFF",
        dark: "#00F",
      },
      textColor: {
        DEFAULT: "#FFF",
      },
    },
  },
  plugins: [],
};
