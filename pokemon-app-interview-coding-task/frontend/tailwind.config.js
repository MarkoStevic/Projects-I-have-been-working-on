/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotatey(180deg)'},
          '100%': { transform: 'rotatey(360deg)' },
        },
      },
      animation: {
        "rotate-image": " rotate 8s linear infinite ",
      }
    },
  },
  plugins: [],
}

