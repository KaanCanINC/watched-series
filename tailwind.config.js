/** @type {import('tailwindcss').Config} */
export default {
  content: ["../index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { maxHeight: "0" },
          "100%": { maxHeight: "500px" },
        },
        collapse: {
          "0%": { maxHeight: "500px", display: "flex" },
          "100%": { maxHeight: "0", display: "flex" },
        },
      },
      animation: {
        expand: "expand 0.5s ease-out forwards",
        collapse: "collapse 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
