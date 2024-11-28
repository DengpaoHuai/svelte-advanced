import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { movieSchema1 } from '../../schemas/movies.schema';
import { createMovie } from '../../services/movies.service';

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(movieSchema1));

		if (!form.valid) {
			return fail(400, { form });
		}

		createMovie(form.data);

		return { form };
	}
} satisfies Actions;
