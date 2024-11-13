import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import plainText from 'vite-plugin-plain-text';

export default defineConfig({
	plugins: [
		sveltekit(),
		plainText('./src/lib/dashboard_ascii/*.txt', {
			dtsAutoGen: true,
			distAutoClean: true,
			namedExport: false
		})
	]
});
