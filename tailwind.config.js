// ./tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-semibold": ["Poppins-SemiBold"],
      },
    },
  },
  plugins: [],
};
