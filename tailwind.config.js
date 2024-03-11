/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      transparent: "transparent",
      current: "currentColor",
      "blu": "#16499C",
    },
    extend: {},
  },
  // plugins: [require('tailwind-scrollbar')],
};
