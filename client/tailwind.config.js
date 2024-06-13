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
            modalOpen: {
               "0%": { scale: "0", },
               "100%": { scale: "1", },
            },
            modalClose: {
               "0%": { scale: "1", display: "block" },
               "100%": { scale: "0", display: "block" },
            },
            rotate: {
               "0%": { transform: 'rotate(90deg)' },
               "100%": { transform: 'rotate(-90deg)' },
            },
            rotateReverse: {
               "0%": { transform: 'rotate(-90deg)' },
               "100%": { transform: 'rotate(90deg)' },
            },
         },
         animation: {
            expand: "expand 0.5s ease-out forwards",
            collapse: "collapse 0.5s ease-out forwards",
            modalOpen: "modalOpen 0.5s ease-out forwards",
            modalClose: "modalClose 0.5s ease-out forwards",
            rotate: "rotate 0.5s ease-out forwards",
            rotateReverse: "rotateReverse 0.5s ease-out forwards",
         },
      },
   },
   plugins: [],
};
