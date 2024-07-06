/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D97D21',
        'secondary': '#8C3C14',
        'claro': '#FFEFD1',
        'escuro': "#3D2622",
        'variant': '#BA781E',
      },
    },
  },
  plugins: [],
}