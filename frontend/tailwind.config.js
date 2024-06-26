module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
        },
      },
    },
  },
  variants: {
    extend: {
      ringColor: ["focus"],
    },
  },
  plugins: [],
};
