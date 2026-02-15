import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://native-stack.github.io',
    output: 'static',
    vite: {
        plugins: [tailwindcss()],
    },
    build: {
        assets: '_assets',
    },
});
