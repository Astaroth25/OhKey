// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://ohkeydigital.com',
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: ['hatchet-enamel-fame.ngrok-free.dev'],
		},
	},
});
