import { metaHead } from "./meta.config";

export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxt/content"],
    app: {
        head: metaHead as Record<string, any>,
    },
});
