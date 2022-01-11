module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121012",
        light: "#F6F8FB",
        subtitle: "#45494E",
        purple: "#633297"
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "Noto Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
