/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: { custom: "0px 50px 100px rgba(50, 50, 93, 0.25)" },
    },
  },
  plugins: [],
};
