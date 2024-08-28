/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0071e3",
        secondary: "#1d232a",
        "light-gray": "#f5f5f7",
        "dark-gray": "#86868b",
        "light-blue": "#f5f5f7",
        "dark-blue": "#1d232a",
        "light-green": "#30d158",
        "dark-green": "#28a745",
        "light-red": "#ff453a",
        "dark-red": "#d73a2e",
        "light-yellow": "#ffd60a",
        "dark-yellow": "#ffcc00",
        "light-purple": "#bf5af2",
        "dark-purple": "#954f9d",
        "light-pink": "#ff2d55",
      },
    },
    plugins: [],
  }
}