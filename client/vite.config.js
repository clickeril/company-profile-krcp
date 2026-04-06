import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Konfigurasi standar tanpa ketergantungan pada variabel .env
export default defineConfig({
  plugins: [react()],
  // Jika Anda ingin tetap menyediakan objek process.env agar tidak error di file lain:
  define: {
    "process.env": {},
  },
});
