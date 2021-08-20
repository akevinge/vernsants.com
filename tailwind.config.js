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
      backgroundImage: (theme) => ({
        "hero-bg": "url('/images/hero-bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
