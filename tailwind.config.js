/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-main": "#032A3B",
        "primary-light": "#E5CDA7",
        "broken-white": "#F5F5F5",
        "primary-brown": "#E4C580",
        "secondary-light": "#F4E4C1",
        "secondary-dark": "#081F5B",
        "primary-red": "#B81D24",
        black: "#000000",
      },
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        pangolin: ["Pangolin", "cursive"]
      },
    },
  },
  plugins: [],
};
