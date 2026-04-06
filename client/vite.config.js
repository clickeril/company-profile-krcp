import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // loadEnv akan mengambil variabel dari file .env Anda
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    // Jika Anda memang butuh VITE_BASE_URL, gunakan env.VITE_BASE_URL
    // Tapi jika tidak butuh, pastikan tidak ada variabel gantung yang dipanggil
    define: {
      "process.env": env,
    },
  };
});
