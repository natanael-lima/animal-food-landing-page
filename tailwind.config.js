/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind esté buscando archivos en el directorio correcto
  ],
  theme: {
    extend: {
      fontSize: {
        '7xl': '10rem', // Añade un nuevo tamaño de fuente
      },
    },
  },
  plugins: [],
}

