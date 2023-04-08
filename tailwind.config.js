export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#53389E",
        secondary: " #F9FAFB",
      },
      fontSize: {
        title: `48px`,
        title2: `32px`,
        paragraph: `20px;`,
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
