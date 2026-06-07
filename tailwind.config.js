/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ОЦЕЙ РЯДОК — він сканує ВСІ файли в src
    "./app/**/*.{js,ts,jsx,tsx}", // Для Next.js App Router (якщо поза src)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        blueLight: "var(--color-blue-light)",
        blueDark: "var(--color-blue-dark)",
        gray: "var(--color-gray)",
        grayLight: "var(--color-gray-light)",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        krub: ["Krub", "sans-serif"],
      },
    },
  },
  plugins: [],
};
