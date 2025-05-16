/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "unyt-primary-dark": "#340082",
        "unyt-primary": "#084fa2",
        "unyt-accent": "#02b4b3",
        "unyt-light": "#b2d680",
        "unyt-text": "#222",
        "unyt-bg": "#fff",
      },
      fontFamily: {
        sans: ["Quicksand"],
      },
    },
  },
  plugins: [],
};
