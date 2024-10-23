/*@type {import('tailwindcss').Config}*/
export default {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
     boxShadow:{
       shadow:'inset 0 0 10px 10px darkgray, 0 0 10px 10px rgba(0, 0, 0, 0.3)',
       btnShadow:'inset 0 0 3px 3px darkgray'
      },
    
    },
  },
  plugins: [],
}

