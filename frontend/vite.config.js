import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@share/boundaryx",
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      "@share/boundaryx": path.join(__dirname, "src", "./share/boundaryx"),
      "@share": path.join(__dirname, "src/share"),
      // react: "@share/boundaryx",
      // "react/jsx-rumtime": "@share/boundaryx/jsx-rumtime",
    },
  },
});
