/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "album-cover": "url('./assets/MBDTF.jpg')",
      },
    },
  },
  plugins: [],
};
