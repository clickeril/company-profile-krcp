import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Hapus base yang menggunakan process.env agar tidak error undefined
  // Cukup gunakan "/" jika ini adalah domain utama di Vercel
  base: "/",
});
