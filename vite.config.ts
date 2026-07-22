import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite keeps this portfolio frontend-only while preserving room for static deployment.
export default defineConfig({
  plugins: [react()],
});
