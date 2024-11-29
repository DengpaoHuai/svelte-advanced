// See https://svelte.dev/docs/kit/types#app.d.ts

import type { HTMLAttributes, HTMLButtonAttributes, SvelteHTMLElements } from 'svelte/elements';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

declare global {
	namespace svelteHTML {
		interface IntrinsicElements {
			'demo-tooltip': HTMLButtonAttributes<HTMLButtonElement>;
		}
	}
}
