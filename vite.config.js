import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: [
			'codemirror',
			'@codemirror/language-javascript',
			'@codemirror/theme-one-dark' /* ... */
		]
	}
};

export default config;
