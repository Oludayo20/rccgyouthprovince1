module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C6EFE",
        secondary: "#3D60F8FF",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
