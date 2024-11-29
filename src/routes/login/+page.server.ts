import { fail, superValidate } from 'sveltekit-superforms';
import type { Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '$lib/config';
import { z } from 'zod';

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6)
});
export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(loginSchema));
		console.log(form);
		if (!form.valid) {
			return fail(400, { form });
		}

		signInWithEmailAndPassword(auth, form.data.email, form.data.password);

		return { form };
	}
} satisfies Actions;
