<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { z } from 'zod';

	const loginSchema = z.object({
		email: z.string().email(),
		password: z.string().min(6)
	});

	const { form, enhance, constraints, errors, isTainted } = superForm(
		{
			email: '',
			password: ''
		},
		{
			validators: zod(loginSchema),
			onSubmit: ({ cancel }) => {
				/*	console.log(movieSchema.parse($form));
				console.log(isTainted());*/
				/*const taintedData = Object.fromEntries(
					Object.entries($form).filter(([key]) => {
						return isTainted(key as FormPath<typeof $form>);
					})
				);
				createMovie(taintedData as Movie);*/
			}
		}
	);
</script>

<form method="POST" use:enhance action="/login">
	<br /><br />
	<label for="director">email:</label>
	<input type="email" id="email" name="email" bind:value={$form.email} {...$constraints.email} />
	{#if $errors.email}
		<p>{$errors.email}</p>
	{/if}
	<br /><br />
	<label for="producer">password:</label>
	<input
		type="password"
		id="password"
		name="password"
		bind:value={$form.password}
		{...$constraints.password}
	/>
	{#if $errors.password}
		<p>{$errors.password}</p>
	{/if}
	<br /><br />

	<button type="submit">Submit</button>
</form>
