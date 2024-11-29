<script lang="ts">
	import type { PlanetResponse } from '../../types/planets.types';
	import { useSnackbar } from '$lib/useSnackBar';
	import { createQuery } from '@tanstack/svelte-query';
	import { derived, writable } from 'svelte/store';

	let currentPage = writable(1);

	const showSnackbar = useSnackbar();

	const waitFor = (ms: number) => new Promise((r) => setTimeout(r, ms));

	const intervalMs = writable(1000);

	const getPlanets = async (page: number) => {
		await waitFor(2000);
		const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
		const data = await response.json();
		return data;
	};

	/*const query = createQuery<PlanetResponse>({
		queryKey: ['planets', currentPage],
		queryFn: () => getPlanets($currentPage)
	});
*/
	const query = createQuery(
		derived(currentPage, ($currentPageDerived) => ({
			queryKey: ['refetch', $currentPageDerived],
			queryFn: async () => getPlanets($currentPageDerived)
		}))
	);
</script>

<h1>Liste Planets</h1>

<button
	onclick={() => {
		showSnackbar('Hello from swapi');
	}}>coucou</button
>

<input type="number" bind:value={$currentPage} />

{#if $query.error}
	<p>{$query.error}</p>
{/if}

{#if $query.isLoading}
	<p>Loading...</p>
{/if}
{#if $query.data}
	{#each $query.data?.results as planet}
		<div>
			<h2>{planet.name}</h2>
			<p>Rotation period: {planet.rotation_period}</p>
			<p>Orbital period: {planet.orbital_period}</p>
			<p>Diameter: {planet.diameter}</p>
			<p>Climate: {planet.climate}</p>
			<p>Gravity: {planet.gravity}</p>
			<p>Terrain: {planet.terrain}</p>
			<p>Surface water: {planet.surface_water}</p>
			<p>Population: {planet.population}</p>
			<p>Residents: {planet.residents}</p>
			<p>Films: {planet.films}</p>
			<p>Created: {planet.created}</p>
			<p>Edited: {planet.edited}</p>
			<p>Url: {planet.url}</p>
		</div>
	{/each}
{/if}

<button
	onclick={() => {
		currentPage.update((prev) => prev + 1);
		console.log($currentPage);
		$query.refetch();
	}}>Next</button
>

<button
	onclick={() => {
		currentPage.update((prev) => prev - 1);
		$query.refetch();
	}}>Previous</button
>
