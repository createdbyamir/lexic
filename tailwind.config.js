/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // ✅ include src/app and any components
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
