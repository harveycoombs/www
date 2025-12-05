// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://harveycoombs.com",
  output: "static",
  integrations: [react()],

  vite: {
      plugins: [tailwindcss()],
      optimizeDeps: {
          include: [
              "@fortawesome/react-fontawesome",
              "@fortawesome/fontawesome-svg-core",
              "@fortawesome/free-brands-svg-icons"
          ]
      }
  },
  adapter: netlify()
});