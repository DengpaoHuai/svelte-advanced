<script lang="ts">
	import { createMutation, createQuery, useQueryClient } from '@tanstack/svelte-query';
	import { deleteMovie, getMovies } from '../../services/movies.service';
	import type { Movie } from '../../schemas/movies.schema';

	const client = useQueryClient();

	const query = createQuery<Movie[]>({
		queryKey: ['movies'],
		queryFn: getMovies
	});
	const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));
	const deleteMovieBis = async (id: string) => {
		await waitFor(2000);
		throw new Error('Error');
		await deleteMovie(id);
		$query.refetch();
	};

	const mutation = createMutation({
		mutationFn: deleteMovieBis,
		onMutate: async (id: string) => {
			const movies = client.getQueryData(['movies']);
			client.setQueryData(['movies'], (prev: Movie[]) => {
				return prev.filter((movie) => movie._id !== id);
			});
			return { movies };
		},
		onError: (error, variables, context) => {
			if (!context) return;
			client.setQueryData(['movies'], context.movies);
		},
		onSuccess: () => {
			$query.refetch();
		}
	});
</script>

<h1>Liste Planets</h1>

{#if $query.error}
	<p>{$query.error}</p>
{/if}

{#if $query.isLoading}
	<p>Loading...</p>
{/if}
{#if $query.data}
	{#each $query.data as movie}
		<div>
			<h2>{movie.title}</h2>
			<p>Director: {movie.director}</p>
			<p>Producer: {movie.producer}</p>
			<p>Release date: {movie.release_date}</p>
			<button
				onclick={() => {
					$mutation.mutate(movie._id);
				}}>delete</button
			>
		</div>
	{/each}
{/if}
