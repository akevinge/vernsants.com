module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      primary: "var(--font-family-primary)",
    },
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        highlight: "var(--color-highlight)",
        "highlight-dark": "var(--color-highlight-dark)",
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
        "screen-5/6": "83vw",
      },
      height: {
        112: "28rem",
        116: "32rem",
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
