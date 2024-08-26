import { config } from "dotenv";
config();

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "https://api-staging.talentify.io",
    },
  },
  css: ["@/assets/css/tailwind.css"],
  plugins: [
    { src: "~/plugins/amcharts5.js", mode: "client" },
    { src: "~/plugins/apexcharts.js", mode: "client" },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },
  ssr: true,
});
