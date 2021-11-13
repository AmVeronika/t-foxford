module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    minWidth: {
      0: "350px",
    },
    screens: {
      "sm": "630px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
