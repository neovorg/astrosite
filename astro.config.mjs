import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://vocal-kelpie-da9daa.netlify.app/",
  integrations: [preact()]
});