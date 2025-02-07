// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [mdx(), react()],
});
