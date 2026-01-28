/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'xs': '390px',   
      'sm': '640px',    
      'md': '768px',    
      'lg': '1024px',   
      'xl': '1280px',   
      '2xl': '1536px',
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'inset-glow': 'inset 0 0 50px rgba(255,255,255,.8)',
      }
    },
  },
  plugins: [],
};