/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
    theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem", // adjust to taste, e.g. "2rem"
        screens: {
          "2xl": "1200px", // cap width at your container size
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
