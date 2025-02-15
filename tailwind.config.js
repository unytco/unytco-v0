/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "unyt-green": "#0EDDD3",
        "backsplash-blue": "#053185",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-delayed": "fadeIn 0.8s ease-out 0.2s forwards",
        "fade-in-delayed-more": "fadeIn 0.8s ease-out 0.4s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
