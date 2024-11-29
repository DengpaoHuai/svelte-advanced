<script lang="ts">
	import { superForm, type FormPath } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { movieSchema, type Movie } from '../../schemas/movies.schema';
	import { createMovie } from '../../services/movies.service';

	const { form, enhance, constraints, errors, isTainted } = superForm(
		{
			title: '',
			director: '',
			producer: '',
			release_date: ''
		},
		{
			validators: zod(movieSchema),
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

<form method="POST" use:enhance action="/pas-super-form">
	<label for="title">Title:</label>
	<input type="text" id="title" name="title" bind:value={$form.title} {...$constraints.title} />

	{#if $errors.title}
		<p>{$errors.title}</p>
	{/if}
	<br /><br />
	<label for="director">Director:</label>
	<input
		type="text"
		id="director"
		name="director"
		bind:value={$form.director}
		{...$constraints.director}
	/>
	{#if $errors.director}
		<p>{$errors.director}</p>
	{/if}
	<br /><br />
	<label for="producer">Producer:</label>
	<input
		type="text"
		id="producer"
		name="producer"
		bind:value={$form.producer}
		{...$constraints.producer}
	/>
	{#if $errors.producer}
		<p>{$errors.producer}</p>
	{/if}
	<br /><br />
	<label for="release_date">Release date:</label>
	<input
		type="date"
		id="release_date"
		name="release_date"
		bind:value={$form.release_date}
		{...$constraints.release_date}
	/>
	{#if $errors.release_date}
		<p>{$errors.release_date}</p>
	{/if}

	<button type="submit">Submit</button>
</form>
