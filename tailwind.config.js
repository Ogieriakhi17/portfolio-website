/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816", // Off-white base color
        secondary: "#aaa6c3", // Tan (light brown) for accents
        tertiary: "#151030", // Sienna (medium brown) for highlights
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3", // Pure white for contrasts
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
