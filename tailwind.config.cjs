/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de colores oscura
        primary: '#0D1117', // Fondo principal (negro oscuro)
        secondary: '#161B22', // Elementos secundarios (gris muy oscuro)
        tertiary: '#21262D', // Bordes, separadores (gris oscuro)
        accent: '#00BFFF', // Azul eléctrico para acentos
        text: '#F0F6FC', // Texto claro
        'text-secondary': '#8B949E', // Texto secundario
      },
    },
  },
  plugins: [],
};
