/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
    "./node_modules/@docusaurus/theme-classic/lib/**/*.js",
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],  // ตั้ง Poppins เป็นหลัก, ตามด้วย stack เดิม
      }
    },
  },
  plugins: [],
};
