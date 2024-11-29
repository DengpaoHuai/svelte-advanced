import { onMount } from 'svelte';
import { writable } from 'svelte/store';

const useLocalStorage = (key: string) => {
	const data = writable<string | null>(null);
	const error = writable<string | null>(null);
	const loading = writable<boolean>(false);

	onMount(() => {
		const value = localStorage.getItem(key);
		if (value) {
			data.update(() => value);
		} else {
			error.update(() => 'No data found');
		}
	});

	return {
		data,
		error,
		loading
	};
};

export default useLocalStorage;
