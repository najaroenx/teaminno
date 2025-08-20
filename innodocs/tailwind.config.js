/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
    "./node_modules/@docusaurus/theme-classic/lib/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
