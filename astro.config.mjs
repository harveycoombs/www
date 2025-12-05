// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://harveycoombs.com",
    server: {
        port: 3000
    },
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
    }
});
