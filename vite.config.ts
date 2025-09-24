import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Adiciona a configuração para o ambiente de preview/produção
  preview: {
    port: 4173, // Usa a porta que o seu site está rodando
    host: true, // Permite acesso externo ao host
    allowedHosts: ["aurabs.com.br"], // Permite o seu domínio
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
