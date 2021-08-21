module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      primary: "var(--font-family-primary)",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.png')",
      },
      invert: {
        "3/4": ".75",
      },
      width: {
        108: "26rem",
        "screen-3/4": "75vw",
      },
    },
  },
  variants: {
    extend: {
      invert: ["hover"],
    },
  },
  plugins: [],
};
