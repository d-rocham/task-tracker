module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ["nunito", "sans-serif"],
        "raleway": ["raleway", "sans-serif"],
        "ubuntu": ["ubuntu", "sans-serif"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
