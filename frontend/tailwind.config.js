module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#dadfeb",
          400: "#b8b6b7",
          600: "#6e6d7e",
          800: "#373643",
          900: "#111214",
          "900_02": "#1a1920",
          "900_01": "#222124",
          "800_01": "#3c3f46",
          "800_b2": "#373643b2",
        },
        blue_gray: { 400: "#8b8e95", 800: "#3e3c5b", "800_01": "#383d4b" },
        black: { "900_33": "#00000033" },
        white: { A700_01: "#fcfdff", A700_02: "#ffffff", A700: "#fffdfd" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#00000033,#00000033)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
