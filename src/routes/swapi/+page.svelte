<script lang="ts">
	import getData from '$lib/hooks/get-data';
	import { writable } from 'svelte/store';
	import type { PlanetResponse } from '../../types/planets.types';
	import { useSnackbar } from '$lib/useSnackBar';

	let currentPage = writable('https://swapi.dev/api/planets/');

	const { data, error, loading } = getData<PlanetResponse>(currentPage);

	const showSnackbar = useSnackbar();
</script>

<h1>Liste Planets</h1>

<button
	onclick={() => {
		showSnackbar('Hello from swapi');
	}}>coucou</button
>

{#if $error}
	<p>{$error}</p>
{/if}

{#if $loading}
	<p>Loading...</p>
{/if}
{#if $data}
	{#each $data?.results as planet}
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
		currentPage.update((prev) => $data?.next!);
	}}>Next</button
>

<button
	onclick={() => {
		currentPage.update((prev) => $data?.previous!);
	}}>Previous</button
>
