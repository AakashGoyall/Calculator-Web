/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // COMMON 
        'btn-operator-color': '#12b4ce',
        // DARK THEME
        'light-theme-color': '#BEEAF2',
        'dark-container-color': '#1A1B28',
        'light-btn-bg-color': '#dfe6e9',
        'light-text-color': '#ffffff',

        // LIGHT THEME 
        'dark-theme-color': '#30323D',
        'light-container-color': '#ffffff',
        'dark-btn-bg-color': '#1E2435',
        'dark-text-color': '#000',
        'light-btn-hover-bg-color': '#b2bec3',

        // Add more colors as needed
      },
    },
  },
  plugins: [],
}