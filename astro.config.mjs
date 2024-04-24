import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import remarkRehype from 'remark-rehype';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});