/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Daftarkan warna tema Anda di sini
        primary: "#1a365d",
        secondary: "#e2e8f0",
        accent: "#f59e0b",
      },
      fontFamily: {
        // Opsional: Daftarkan font Inter jika ingin menggunakan class font-inter
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
