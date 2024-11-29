import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build', // Dossier de sortie pour le contenu statique
			assets: 'build',
			fallback: 'index.html', // Si besoin, pour les routes SPA
			precompress: false
		}),
		prerender: {
			entries: ['*'] // Prérend toutes les routes
		}
	}
};

export default config;
