import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tuanbyte.es",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
