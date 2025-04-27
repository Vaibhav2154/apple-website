/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#424245", // Fixed: no 8-digit hex
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
}
// tailwind.config.js