/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-normal': '#a8a77a',
        'bg-fire': '#ee8130',
        'bg-water': '#6390f0',
        'bg-electric': '#f7d02c',
        'bg-grass': '#7ac74c',
        'bg-ice': '#96d9d6',
        'bg-fighting': '#c22e28',
        'bg-poison': '#a33ea1',
        'bg-ground': '#e2bf65',
        'bg-flying': '#a98ff3',
        'bg-psychic': '#f95587',
        'bg-bug': '#a6b91a',
        'bg-rock': '#b6a136',
        'bg-ghost': '#735797',
        'bg-dragon': '#6f35fc',
        'bg-dark': '#705746',
        'bg-steel': '#b7b7ce',
        'bg-fairy': '#d685ad',
      },
    },
  },
  plugins: [],
}